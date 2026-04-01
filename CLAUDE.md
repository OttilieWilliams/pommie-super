# PommieSuper — Claude Code Project Guide

## Project Overview

PommieSuper helps UK nationals living in Australia answer one question:
**What's the tax case for paying extra into your super?**

The answer depends on the user's visa type and their plans — whether they're
leaving soon, staying long-term, or unsure. The app asks two questions
(visa and plans), then shows a tailored educational results page with the
answer and the reasoning behind it.

The app is **educational, not a personal calculator**. It shows the maths
clearly — using general illustrative figures and $1 comparison tables —
so users can reason about their own situation. No personal financial details
are collected. The question "how much should I contribute?" is out of scope;
that depends on individual circumstances and belongs with an adviser.

The app is **stateless** — no user accounts, no persisted data, no database
writes. All calculations run in-memory from inputs submitted in the current
session. Nothing is stored between sessions.

The app is **informational only — not financial advice**. All outputs must
include appropriate disclaimers. Never present calculations as recommendations.

The project is open source.

---

## Hard Constraints

These rules are non-negotiable. Getting any of them wrong causes real problems.

### Money

- All monetary values represented as **integers in the smallest currency unit**
  (pence / cents). Never store or pass floats for money.
- Use Ruby's `BigDecimal` for any arithmetic involving money or percentages.
  Never use `Float`.
- Currency must always be explicit — never assume a currency.

### Hardcoded Rates and Thresholds

Every hardcoded tax rate, threshold, or cap must include:
```ruby
DASP_WORKING_HOLIDAY_TAX_RATE = 0.65
# Source: https://www.ato.gov.au/...
# Last verified: March 2026
```
No exceptions. If a rate has no source URL and verification date, it must not
be committed.

### Disclaimers (Non-Negotiable)

Every page and every results view must include both disclaimers. Claude must
never write copy that removes, softens, or buries either one.

**Financial disclaimer:**
> "PommieSuper is for general information only, not financial advice.
> The calculations are simplified and may not reflect your full situation.
> Consult a qualified adviser before making decisions about your super."

**Work in progress disclaimer** (displayed prominently, not just the footer):
> "⚠️ PommieSuper is a work in progress. Calculations may contain errors. If
> you spot anything that looks wrong, please
> [open an issue on GitHub].(https://github.com/OttilieWilliams/pommie-super/issues)"

### Separation of Concerns

- **Controllers** — HTTP only. Request parsing, response formatting, status
  codes. Zero business logic.
- **Services** — all business logic. One service per domain concept.
- **Models** — data shapes and validations only. No calculation logic.
- **Serializers** — JSON shaping only. No data manipulation in controllers.
- **Workers** — async tasks only (exchange rate fetching).

### TypeScript

- Strict mode. No `any` types — use `unknown` and narrow properly.
- All API response shapes need a corresponding interface in `src/types/`.
- Prefer explicit return types on functions.
- Use `zod` for runtime validation of API responses at the service boundary.

### Sensitive Data

- Never log financial values. Log events only (e.g. "scenario calculated",
  not "scenario calculated, balance: $85,000").
- Never commit `.env` files or hardcode secrets.

### What Claude Must Not Do

- Use `Float` for any monetary calculation
- Hardcode exchange rates
- Add UK-specific pension logic outside of `PensionSystems::Uk`
- Skip or soften either disclaimer
- Put business logic in controllers
- Use `any` in TypeScript
- Use wildcard `*` in CORS for production
- Commit hardcoded rates without `# Source:` and `# Last verified:` comments
- Collect personal financial details from the user (balance, salary, contribution amount)

---

## Domain

### How It Works

The user completes a short wizard — two steps for everyone. The app then
shows an educational results page tailored to their situation: what DASP
means for temporary visa holders, why contributions are worthwhile for
permanent residents staying, or how the UK tax picture works for those
returning to the UK.

All results pages use general illustrative figures (e.g. the $1 journey,
per-$1 tables at common tax rates). No personal financial details are
collected at any point.

### Inputs

The wizard is always two steps. Step 2 adapts based on visa type.

**Step 1 — visa type (everyone):**
- Working Holiday (417 / 462)
- Other temporary visa — Temporary Skill (482/457) · Temporary Partner (820)
- Permanent resident or citizen — Permanent Partner (801) · Any PR visa · Australian Citizen

**Step 2 for temporary visa holders (Working Holiday / other temporary):**
- "I plan to leave Australia" → results (DASP explanation, rate varies by visa type — see below)
- "I'm applying for a permanent visa" → age 60 question (inline, same step)

**Step 2 for permanent residents / citizens:**
- "I plan to stay in Australia" → results
- "I'm leaving, or thinking about it" → age 60 question (inline, same step)

**The age 60 question (inline within step 2 for both the above paths):**
- "Yes — I'll be here at 60 or later" → results
- "No — I expect to leave before 60" → results
- "Not sure" → results

All paths end at an educational results page. No further steps.

### Visa Types

| Enum value | UI label |
|---|---|
| `working_holiday` | Working Holiday (417 / 462) |
| `temporary` | Other temporary visa (482/457, 820) |
| `permanent` | Permanent resident or citizen (801, any PR, citizen) |

### What the Results Show

The results always answer the voluntary contribution question, but the
supporting information adapts to the user's visa and plans.

**Working Holiday holders planning to leave:**

The answer is always no. The results page shows:
- What DASP is and the 65% rate that applies to WHV holders
- A bar chart: salary bar ($0.675 after 32.5% tax) vs super bar ($0.85
  after 15% concessional tax → $0.30 after 65% DASP). Makes the DASP
  destruction visible at a glance.
- A clear statement: extra contributions are not worthwhile. The exit tax
  destroys the upfront saving.
- A note: if you change visa before leaving (e.g. WHV → 482 → PR), the
  DASP rate drops or disappears. Come back and re-enter with your new
  visa type.

**Other temporary visa holders planning to leave:**

The answer is no (DASP still applies, though at a lower rate than WHV).
The results page shows the same $1 journey chart using the applicable rate
for the user's visa type (refer to ATO schedule for the correct rate), and
the same conclusion. The DASP rate displayed must match the visa type
selected in step 1 — do not use the WHV rate for non-WHV temporary visas.

**Temporary visa holders applying for a permanent visa:**

These users may end up on a permanent visa, in which case the DASP question
becomes irrelevant. The results page routes through the age 60 question
(same as permanent residents leaving / unsure) and shows results accordingly.
The results page should note that the outcome assumes they successfully obtain
a permanent visa, and that if they leave on a temporary visa, DASP will apply
at the rate relevant to that visa.

**Permanent residents / citizens staying in Australia:**

The answer is always yes. The results page shows:
- Concessional contributions are taxed at 15% going in vs the user's
  marginal income tax rate on salary (32.5%+ for most).
- Withdrawal after 60 is tax-free — no exit tax erodes the benefit.
- A table showing the saving per $1 contributed at common marginal rates
  (32.5%, 37%, 45%) so users can see where they sit.
- A note: the concessional contribution cap limits how much you can put
  in per year. Link to ATO guidance.

**Permanent residents / citizens leaving or unsure — here at 60:**

The answer is always yes. The results page shows:
- They can withdraw their entire super tax-free before leaving.
- Same logic as PR staying: 15% going in, tax-free on the way out.
- The same per-$1 table at common marginal rates.
- A clear note: withdraw before you leave Australia and before establishing
  UK tax residency.
- Adviser flags (IHT, 25% lump sum, exchange rate risk) — see below.

**Permanent residents / citizens leaving before 60 or unsure about 60:**

The answer depends on the user's expected UK tax rate at retirement.
The results page shows:
- Super is locked until preservation age — cannot be withdrawn before leaving.
- When accessed from the UK, UK income tax applies (20% basic or 40% higher).
- A clear $1 comparison table showing both outcomes:
  - At 32.5% Australian marginal rate: $1 as salary = $0.675.
    Same $1 in super ($0.85 after 15% tax) → $0.68 at UK basic rate,
    $0.51 at UK higher rate.
  - At 37% and 45% Australian marginal rates: same table, showing the
    breakeven shifts.
- **Bottom line stated clearly:** contributions make sense if you expect
  to be a UK basic rate taxpayer at retirement. They probably don't if
  you expect to be a higher rate taxpayer. The app invites the user to
  reason about which is more likely for them.
- Adviser flags (IHT, 25% lump sum, exchange rate risk) — see below.

Adviser flags (surfaced for all PR returning paths):
- **UK Inheritance Tax** — if the user is UK-domiciled, their Australian
  super may form part of their worldwide estate for UK IHT purposes (40%
  above £325,000). From April 2027, the UK is bringing unused pension
  funds into scope for IHT, which may further affect how Australian super
  is treated. Significant planning issue for larger balances.
  GOV.UK ref: https://www.gov.uk/government/publications/inheritance-tax-unused-pension-funds-and-death-benefits
- **25% tax-free lump sum** — under UK rules, lump sums from qualifying
  overseas pension schemes may be eligible for 25% tax-free treatment,
  the same as a UK pension. Whether the user's Australian super fund
  qualifies depends on whether it meets HMRC's definition of an "overseas
  pension scheme." This needs checking with a cross-border tax adviser.
  GOV.UK ref: https://www.gov.uk/government/publications/pension-tax-for-overseas-pensions/pension-tax-for-overseas-pensions
- **Exchange rate risk** — a large AUD balance converted to GBP at a bad
  rate can significantly erode value.

Full user stories with acceptance criteria: `docs/user-stories.md`

---

## Key Calculations

All calculations are illustrative — they use general figures and common
tax rates, not the user's personal numbers.

### DASP (Departing Australia Superannuation Payment)

Shown to temporary visa holders planning to leave. DASP is the tax applied
when a temporary resident withdraws their super after leaving Australia.

- WHV holders: 65% on the taxable component
- Other temporary visa holders (482/457, 820): lower rate — refer to ATO
  schedule

The $1 journey chart is generated by `DaspCalculatorService` using the
applicable rate for the user's visa type. The visa type must be passed
through to the service — never fall back to the WHV rate for non-WHV
temporary visa holders.

Source: `DaspCalculatorService`
ATO ref: https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/accessing-your-super/departing-australia-superannuation-payment-dasp

### Concessional Contribution Saving

Shown to permanent residents and citizens. The saving per $1 contributed
at common marginal rates (32.5%, 37%, 45%) is generated by
`ConcessionalContributionService`.

### UK Tax Comparison (PR returning before / unsure about 60)

Shown to permanent residents who may leave before 60 or are unsure.
`UkTaxComparisonService` generates the $1 comparison table across Australian
marginal rates (32.5%, 37%, 45%) and UK tax rates (20% basic, 40% higher).
No personal financial inputs — all illustrative.

Source: `UkTaxComparisonService`
ATO preservation age: https://www.ato.gov.au/individuals-and-families/jobs-and-employment-types/working-as-an-employee/leaving-the-workforce/accessing-your-super-to-retire

---

## Architecture

```
pommie-super/
├── api/                    # Ruby on Rails API (API-only mode)
│   ├── app/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── services/       # All business logic
│   │   ├── serializers/    # JSON:API (jsonapi-serializer)
│   │   └── workers/        # Sidekiq background jobs
│   ├── config/
│   └── spec/
│       ├── models/
│       ├── services/
│       ├── requests/       # Integration tests (full HTTP stack)
│       └── system/         # E2E browser tests (Capybara)
├── web/                    # React + TypeScript frontend
│   ├── src/
│   │   ├── components/
│   │   ├── features/       # Feature-based modules (wizard, results)
│   │   ├── hooks/
│   │   ├── services/       # API client calls
│   │   ├── types/
│   │   └── utils/
│   └── tests/
├── design/                 # Figma exports
├── infrastructure/         # See infrastructure/README.md
├── docs/                   # User stories, detailed docs
├── docker-compose.yml
└── CLAUDE.md
```

### Tech Stack

| Layer | Technology |
|---|---|
| Backend | Ruby on Rails (API-only) |
| Frontend | React + TypeScript |
| Cache / Jobs | Redis + Sidekiq |
| Containerisation | Docker + Docker Compose |
| Hosting | Fly.io |
| Testing (API) | RSpec + FactoryBot + Capybara |
| Testing (Web) | Vitest + React Testing Library |
| API Docs | OpenAPI / Swagger (rswag) |
| Design | Figma |

### Stateless Design

There is no database for user data. No PostgreSQL. The API receives inputs,
runs calculations in-memory, and returns results. Redis is used only for
exchange rate caching and Sidekiq job queuing.

Cache keys are defined as constants in a `CacheKeys` module:
- `exchange_rate:GBP:AUD` — TTL 24 hours

### Country Extensibility

Designed to support additional home countries beyond the UK (South Africa is
the most likely second).

- Pension system rules live in `app/services/pension_systems/` with a module
  per country (e.g. `PensionSystems::Uk`)
- Do not hardcode UK-specific rules outside of `PensionSystems::Uk`
- `home_country` drives which pension system module is loaded

---

## Conventions

### React

- Feature-based folder structure: `features/wizard/`, `features/results/`
- The wizard is always two steps: visa type → plans. The progress indicator
  always shows 2 bars. The plans step adapts its content and inline
  follow-up questions based on the visa type selected.
- Small, single-responsibility components
- Custom hooks for stateful logic beyond simple `useState`
- No business logic in components — extract to hooks or utils
- No prop drilling beyond two levels

### Ruby

- Standard Ruby (standardrb)
- Prefer explicit over clever
- Methods do one thing
- Avoid model callbacks — use service objects

### API

- Versioned routes: `/api/v1/`
- JSON:API response format
- Errors: `{ "errors": [{ "field": "age", "message": "must be > 0" }] }`
- All endpoints documented in OpenAPI spec (rswag)

### Testing

- All services must have unit tests covering each visa type and all tax
  rate combinations used in the illustrative tables
- All API endpoints must have request specs
- Use FactoryBot — no fixtures
- React: test behaviour, not implementation. Mock API calls at the service
  boundary using Zod schemas as the contract.

---

_Last updated: April 2026_
_Update this file when architectural decisions change._
_When hardcoded rates change, update `# Last verified:` in source and note here._
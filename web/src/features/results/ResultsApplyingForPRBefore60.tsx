// Australian income tax rates used in comparison tables.
// Source: https://www.ato.gov.au/rates/individual-income-tax-rates/
// Last verified: March 2026

// Concessional contributions tax rate.
// Source: https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/growing-and-keeping-track-of-your-super/how-much-can-you-contribute-to-super/concessional-contributions-cap
// Last verified: March 2026

// UK income tax rates used in comparison tables.
// Source: https://www.gov.uk/income-tax-rates
// Last verified: March 2026

import { FinancialDisclaimer } from '../../components/FinancialDisclaimer';
import { WorkInProgressBanner } from '../../components/WorkInProgressBanner';

export function ResultsApplyingForPRBefore60() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Status label */}
        <p className="text-sm text-slate-500 mb-8">
          Applying for permanent residency · May leave before 60
        </p>

        {/* Summary card */}
        <div className="bg-slate-50 rounded-lg p-8 mb-12">
          <h1 className="text-4xl text-slate-900 mb-3">
            The tax case depends on your UK tax rate at retirement
          </h1>
          <p className="text-lg text-slate-600">
            If your PR application is successful and you can withdraw in Australia at 60,
            contributing is clearly worthwhile. If you access super from the UK, it depends on
            whether you'll be a basic or higher rate taxpayer.
          </p>
        </div>

        {/* Why age 60 matters */}
        <div className="border-l-4 border-blue-500 bg-blue-50 p-6 mb-12">
          <h2 className="text-xl text-slate-900 mb-3">Why does age 60 matter?</h2>
          <p className="text-slate-700 leading-relaxed">
            Super is locked until{' '}
            <a
              href="https://www.ato.gov.au/individuals-and-families/jobs-and-employment-types/working-as-an-employee/leaving-the-workforce/accessing-your-super-to-retire#ato-Preservationage"
              className="underline hover:text-slate-900"
              target="_blank"
              rel="noreferrer"
            >
              preservation age
            </a>
            . You can't withdraw it early just because you leave Australia. If you're still here
            at 60, you can take it all out tax-free. If you've already left, you'll access it as
            a UK resident and pay income tax on it. The difference can be significant.
          </p>
        </div>

        {/* Section: Stay until 60 */}
        <div className="mb-12">
          <h2 className="text-xl text-slate-900 mb-2">If you stay until 60 — tax-free withdrawal</h2>
          <p className="text-slate-600 mb-6">Your saving per $1 contributed at common marginal rates:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left py-3 px-4 text-slate-900">Your marginal rate</th>
                  <th className="text-left py-3 px-4 text-slate-900">Tax on salary</th>
                  <th className="text-left py-3 px-4 text-slate-900">Tax in super</th>
                  <th className="text-left py-3 px-4 text-slate-900">Tax on withdrawal</th>
                  <th className="text-left py-3 px-4 text-slate-900">You save</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-700">32.5% ($45k–$120k)</td>
                  <td className="py-3 px-4 text-slate-700">$0.325</td>
                  <td className="py-3 px-4 text-slate-700">$0.15</td>
                  <td className="py-3 px-4 text-slate-700">$0</td>
                  <td className="py-3 px-4 text-green-600 font-medium">$0.175</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-700">37% ($120k–$180k)</td>
                  <td className="py-3 px-4 text-slate-700">$0.37</td>
                  <td className="py-3 px-4 text-slate-700">$0.15</td>
                  <td className="py-3 px-4 text-slate-700">$0</td>
                  <td className="py-3 px-4 text-green-600 font-medium">$0.22</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-700">45% ($180k+)</td>
                  <td className="py-3 px-4 text-slate-700">$0.45</td>
                  <td className="py-3 px-4 text-slate-700">$0.15</td>
                  <td className="py-3 px-4 text-slate-700">$0</td>
                  <td className="py-3 px-4 text-green-600 font-medium">$0.30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            Withdrawals from a taxed super fund after 60 are tax-free for Australian residents.
          </p>
        </div>

        {/* Section: Leave before 60 */}
        <div className="mb-8">
          <h2 className="text-xl text-slate-900 mb-2">If you leave before 60 — UK income tax applies</h2>
          <p className="text-slate-600 mb-6">
            What $1 contributed is worth when you access it from the UK, compared to keeping it
            as salary:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left py-3 px-4 text-slate-900">AUS marginal rate</th>
                  <th className="text-left py-3 px-4 text-slate-900">$1 as salary</th>
                  <th className="text-left py-3 px-4 text-slate-900">Super, UK basic rate (20%)</th>
                  <th className="text-left py-3 px-4 text-slate-900">Super, UK higher rate (40%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-700">32.5% ($45k–$120k)</td>
                  <td className="py-3 px-4 text-slate-700">$0.675</td>
                  <td className="py-3 px-4 text-green-600 font-medium">$0.68</td>
                  <td className="py-3 px-4 text-red-600 font-medium">$0.51</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-700">37% ($120k–$180k)</td>
                  <td className="py-3 px-4 text-slate-700">$0.63</td>
                  <td className="py-3 px-4 text-green-600 font-medium">$0.68</td>
                  <td className="py-3 px-4 text-red-600 font-medium">$0.51</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-700">45% ($180k+)</td>
                  <td className="py-3 px-4 text-slate-700">$0.55</td>
                  <td className="py-3 px-4 text-green-600 font-medium">$0.68</td>
                  <td className="py-3 px-4 text-red-600 font-medium">$0.51</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-3">
            Super column: $1 → $0.85 after 15% concessional tax → UK income tax on withdrawal.
            Basic rate (20%): $0.85 × 0.80 = $0.68. Higher rate (40%): $0.85 × 0.60 = $0.51.
          </p>
        </div>

        {/* Bottom line */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg text-slate-900 mb-3">The bottom line</h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            <strong>If you expect to be a UK basic rate taxpayer at retirement:</strong> contributing
            makes sense at any Australian marginal rate. You keep slightly more than if you'd taken
            the money as salary.
          </p>
          <p className="text-slate-700 leading-relaxed">
            <strong>If you expect to be a UK higher rate taxpayer at retirement:</strong> the
            numbers don't favour super. The 40% UK tax on withdrawal more than offsets the 15%
            concessional rate going in.
          </p>
        </div>

        {/* Amber callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <p className="text-amber-900 leading-relaxed">
            If there's a chance you'll still be in Australia at 60, the most valuable move is to
            withdraw before leaving and before establishing UK tax residency. This turns an
            uncertain case into a clearly worthwhile one.
          </p>
        </div>

        {/* PR assumption note */}
        <div className="border border-slate-200 bg-slate-50 rounded-lg p-6 mb-12">
          <h2 className="text-xl text-slate-900 mb-3">If your PR application is unsuccessful</h2>
          <p className="text-slate-700 leading-relaxed">
            These results assume you obtain permanent residency. If you end up leaving Australia
            on a temporary visa, DASP will apply at the rate for your visa type. Come back and
            re-enter with your visa type if that happens.
          </p>
        </div>

        {/* Adviser flags */}
        <div className="mb-12">
          <h2 className="text-xl text-slate-900 mb-6">Things worth discussing with an adviser</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-slate-700">
                <strong className="text-slate-900 block mb-1">UK Inheritance Tax</strong>
                If you're UK-domiciled, your Australian super may form part of your worldwide
                estate for IHT purposes. From April 2027, unused pension funds may also be
                brought into scope.{' '}
                <a
                  href="https://www.gov.uk/government/publications/inheritance-tax-unused-pension-funds-and-death-benefits"
                  className="underline hover:text-slate-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  GOV.UK guidance
                </a>
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-slate-700">
                <strong className="text-slate-900 block mb-1">25% tax-free lump sum</strong>
                Under UK rules, lump sums from qualifying overseas pension schemes may be eligible
                for 25% tax-free treatment. Whether your super fund qualifies depends on HMRC's
                definition.{' '}
                <a
                  href="https://www.gov.uk/government/publications/pension-tax-for-overseas-pensions/pension-tax-for-overseas-pensions"
                  className="underline hover:text-slate-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  GOV.UK guidance
                </a>
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-slate-700">
                <strong className="text-slate-900 block mb-1">Exchange rate risk</strong>
                A large AUD balance converted to GBP at a bad rate can significantly erode value.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="space-y-4">
          <FinancialDisclaimer />
          <WorkInProgressBanner />
        </div>
      </div>
    </div>
  );
}

// Australian income tax rates and thresholds used in the savings table.
// Source: https://www.ato.gov.au/rates/individual-income-tax-rates/
// Last verified: March 2026

// Concessional contributions tax rate.
// Source: https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/growing-and-keeping-track-of-your-super/how-much-can-you-contribute-to-super/concessional-contributions-cap
// Last verified: March 2026

import { FinancialDisclaimer } from '../../components/FinancialDisclaimer';
import { WorkInProgressBanner } from '../../components/WorkInProgressBanner';

export function ResultsApplyingForPRHereAt60() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Status label */}
        <p className="text-sm text-slate-500 mb-8">
          Applying for permanent residency · Will be here at 60
        </p>

        {/* Summary card */}
        <div className="bg-slate-50 rounded-lg p-8 mb-12">
          <h1 className="text-4xl text-green-600 mb-3">
            The tax case for contributing is strong
          </h1>
          <p className="text-lg text-slate-600">
            If your PR application is successful, you save tax on the way in and can withdraw
            your super tax-free before you leave Australia. The key is getting the timing right.
          </p>
        </div>

        {/* How the tax saving works */}
        <div className="border-l-4 border-blue-500 bg-blue-50 p-6 mb-12">
          <h2 className="text-xl text-slate-900 mb-3">How the tax saving works</h2>
          <p className="text-slate-700 leading-relaxed">
            Concessional (pre-tax) contributions to super are taxed at 15%. If you kept that
            money as salary, you'd pay your marginal income tax rate — 32.5% or higher for most
            working adults. That difference is your saving on every dollar you contribute. When
            you withdraw after 60 as an Australian resident, the withdrawal is tax-free.
          </p>
        </div>

        {/* Savings table */}
        <div className="mb-6">
          <h3 className="text-lg text-slate-900 mb-4">Your saving per $1 contributed</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left py-3 px-4 text-slate-900">Your marginal tax rate</th>
                  <th className="text-left py-3 px-4 text-slate-900">Tax on salary</th>
                  <th className="text-left py-3 px-4 text-slate-900">Tax in super</th>
                  <th className="text-left py-3 px-4 text-slate-900">You save</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-700">32.5% ($45k–$120k)</td>
                  <td className="py-3 px-4 text-slate-700">$0.325</td>
                  <td className="py-3 px-4 text-slate-700">$0.15</td>
                  <td className="py-3 px-4 text-green-600 font-medium">$0.175</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-700">37% ($120k–$180k)</td>
                  <td className="py-3 px-4 text-slate-700">$0.37</td>
                  <td className="py-3 px-4 text-slate-700">$0.15</td>
                  <td className="py-3 px-4 text-green-600 font-medium">$0.22</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 px-4 text-slate-700">45% ($180k+)</td>
                  <td className="py-3 px-4 text-slate-700">$0.45</td>
                  <td className="py-3 px-4 text-slate-700">$0.15</td>
                  <td className="py-3 px-4 text-green-600 font-medium">$0.30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-12">
          There's a cap on how much you can contribute each year at the concessional rate.{' '}
          <a
            href="https://www.ato.gov.au/tax-rates-and-codes/key-superannuation-rates-and-thresholds/contributions-caps"
            className="underline hover:text-slate-700"
            target="_blank"
            rel="noreferrer"
          >
            Check the current cap on the ATO website.
          </a>
        </p>

        {/* Timing callout */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <h2 className="text-xl text-slate-900 mb-3">Getting the timing right</h2>
          <p className="text-amber-900 leading-relaxed">
            Withdraw your super before you leave Australia and before establishing UK tax
            residency. Once you become a UK tax resident, withdrawals may be subject to UK
            income tax. Taking the money out while you're still an Australian resident locks
            in the tax-free treatment.
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
                estate for IHT purposes — regardless of where you're living. From April 2027,
                unused pension funds may also be brought into scope.{' '}
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

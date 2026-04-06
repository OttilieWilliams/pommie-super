// DASP tax rate for Working Holiday visa holders (417 / 462) on the taxable component.
// Source: https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/temporary-residents-and-superannuation/departing-australia-superannuation-payment-dasp
// Last verified: March 2026

// Australian income tax rate (32.5%) used in illustrative salary bar.
// Source: https://www.ato.gov.au/rates/individual-income-tax-rates/
// Last verified: March 2026

// Concessional contributions tax rate (15%) used in illustrative super bar.
// Source: https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/growing-and-keeping-track-of-your-super/how-much-can-you-contribute-to-super/concessional-contributions-cap
// Last verified: March 2026

import { FinancialDisclaimer } from '../../components/FinancialDisclaimer';
import { WorkInProgressBanner } from '../../components/WorkInProgressBanner';

export function ResultsWHVLeaving() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Status label */}
        <p className="text-sm text-slate-500 mb-8">
          Working Holiday visa (417 / 462) · Planning to leave Australia
        </p>

        {/* Summary card */}
        <div className="bg-slate-50 rounded-lg p-8 mb-12">
          <h1 className="text-4xl text-slate-900 mb-3">
            The tax case for extra contributions doesn't stack up
          </h1>
          <p className="text-lg text-slate-600">
            The exit tax on your super when you leave Australia wipes out any saving from
            contributing in the first place.
          </p>
        </div>

        {/* Bar chart */}
        <div className="mb-12">
          <h2 className="text-xl text-slate-900 mb-8">What happens to $1 of your income</h2>

          <div className="space-y-6">
            {/* Bar 1: Keep as salary */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-700">Keep as salary (after 32.5% income tax)</span>
                <span className="text-slate-900 font-medium">$0.675</span>
              </div>
              <div className="h-12 bg-slate-100 rounded">
                <div
                  className="h-full bg-slate-400 rounded"
                  style={{ width: '67.5%' }}
                />
              </div>
            </div>

            {/* Bar 2: Into super */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-700">Put into super (after 15% concessional tax)</span>
                <span className="text-slate-900 font-medium">$0.85</span>
              </div>
              <div className="h-12 bg-slate-100 rounded">
                <div
                  className="h-full bg-blue-400 rounded"
                  style={{ width: '85%' }}
                />
              </div>
            </div>

            {/* Bar 3: Super after DASP */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-700">Super after DASP (65% exit tax)</span>
                <span className="text-slate-900 font-medium">$0.30</span>
              </div>
              <div className="h-12 bg-slate-100 rounded">
                <div
                  className="h-full bg-red-500 rounded"
                  style={{ width: '30%' }}
                />
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-6">
            For every $1 put into super, you receive $0.30 after DASP — compared to $0.675
            kept as salary. The exit tax destroys the upfront saving.
          </p>
        </div>

        {/* What is DASP */}
        <div className="border-l-4 border-blue-500 bg-blue-50 p-6 mb-8">
          <h2 className="text-xl text-slate-900 mb-3">What is DASP?</h2>
          <p className="text-slate-700 leading-relaxed">
            When you leave Australia on a temporary visa, you can claim your super as a
            Departing Australia Superannuation Payment. For Working Holiday visa holders, the
            taxable component is taxed at 65%. This is why extra contributions don't make sense
            — the 15% tax saving going in is more than cancelled out by the 65% tax going out.{' '}
            <a
              href="https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/temporary-residents-and-superannuation/departing-australia-superannuation-payment-dasp"
              className="underline hover:text-slate-900"
              target="_blank"
              rel="noreferrer"
            >
              Read more on the ATO website.
            </a>
          </p>
        </div>

        {/* Visa change callout */}
        <div className="border border-slate-200 bg-slate-50 rounded-lg p-6 mb-12">
          <h2 className="text-xl text-slate-900 mb-3">What if my visa situation changes?</h2>
          <p className="text-slate-700 leading-relaxed">
            If you move to a different visa — for example a Temporary Skill visa (482) or a
            Permanent Resident visa — the DASP rate drops significantly or disappears entirely.
            If that happens, come back and select your new visa type. The answer may be very
            different.
          </p>
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

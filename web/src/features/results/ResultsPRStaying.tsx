// Australian income tax rates and thresholds used in the savings table.
// Source: https://www.ato.gov.au/rates/individual-income-tax-rates/
// Last verified: March 2026

// Concessional contributions tax rate.
// Source: https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/growing-and-keeping-track-of-your-super/how-much-can-you-contribute-to-super/concessional-contributions-cap
// Last verified: March 2026

export function ResultsPRStaying() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Status Label */}
        <p className="text-sm text-slate-500 mb-8">
          Permanent resident or citizen · Planning to stay in Australia
        </p>

        {/* Summary Card */}
        <div className="bg-slate-50 rounded-lg p-8 mb-12">
          <h1 className="text-4xl text-green-600 mb-3">
            The tax case for contributing is strong
          </h1>
          <p className="text-lg text-slate-600">
            You save tax on the way in, and pay nothing when you withdraw after 60.
          </p>
        </div>

        {/* How Tax Saving Works */}
        <div className="border-l-4 border-blue-500 bg-blue-50 p-6 mb-12">
          <h2 className="text-xl text-slate-900 mb-3">How the tax saving works</h2>
          <p className="text-slate-700 leading-relaxed">
            Concessional (pre-tax) contributions to super are taxed at 15%. If you kept that
            money as salary, you'd pay your marginal income tax rate — 32.5% or higher for most
            working adults. That difference is your saving on every dollar you contribute.
          </p>
        </div>

        {/* Savings Table */}
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

        {/* Tax-Free Withdrawal */}
        <div className="border-l-4 border-blue-500 bg-blue-50 p-6 mb-12">
          <h2 className="text-xl text-slate-900 mb-3">Why is withdrawal tax-free?</h2>
          <p className="text-slate-700 leading-relaxed">
            Australian residents aged 60 and over pay no tax when withdrawing from a taxed super
            fund. Your contributions benefit from the concessional 15% tax rate going in, with no
            exit tax eroding them on the way out.
          </p>
        </div>

        {/* Disclaimers */}
        <div className="space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Financial disclaimer:</strong> PommieSuper is
              for general information only, not financial advice. The calculations are simplified
              and may not reflect your full situation. Consult a qualified adviser before making
              decisions about your super.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>⚠️ Work in progress:</strong> PommieSuper is a work in progress.
              Calculations may contain errors. If you spot anything that looks wrong, please{' '}
              <a
                href="https://github.com/OttilieWilliams/pommie-super/issues"
                className="underline hover:text-amber-700"
                target="_blank"
                rel="noreferrer"
              >
                open an issue on GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

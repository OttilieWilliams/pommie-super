import { useNavigate } from "react-router";
import { FinancialDisclaimer } from "../../components/FinancialDisclaimer";
import { WorkInProgressBanner } from "../../components/WorkInProgressBanner";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="mb-8">
          <h1 className="text-sm tracking-wider text-slate-600 mb-0">
            POMMIESUPER
          </h1>
        </div>

        <h2 className="text-5xl mb-6 text-slate-900 max-w-2xl mx-auto leading-tight">
          What's the tax case for paying extra into your super?
        </h2>

        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
          If you're a UK national living in Australia, the tax
          picture depends on your visa, your plans, and how long
          you're staying. This free tool shows you the numbers so
          you can decide for yourself.
        </p>

        <button
          onClick={() => navigate("/wizard")}
          className="bg-slate-900 text-white px-8 py-4 text-lg rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
        >
          Start the calculator
        </button>

        <p className="text-sm text-slate-500 mt-4">
          No account needed. Takes under 2 minutes.
        </p>
      </div>

      {/* Disclaimers */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-4">
          <FinancialDisclaimer />
        </div>
        <WorkInProgressBanner />
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 mt-12 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <div>
            <a
              href="https://github.com/OttilieWilliams/pommie-super"
              className="hover:text-slate-900 transition-colors"
            >
              PommieSuper is open source
            </a>
          </div>
          <div>Built for UK nationals in Australia</div>
        </div>
      </footer>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./features/home/HomePage";
import { Wizard } from "./features/wizard/Wizard";
import { ResultsPRStaying } from "./features/results/ResultsPRStaying";
import { ResultsPRLeavingBefore60 } from "./features/results/ResultsPRLeavingBefore60";
import { ResultsWHVLeaving } from "./features/results/ResultsWHVLeaving";
import { ResultsTempLeaving } from "./features/results/ResultsTempLeaving";
import { ResultsPRLeavingHereAt60 } from "./features/results/ResultsPRLeavingHereAt60";
import { ResultsApplyingForPRHereAt60 } from "./features/results/ResultsApplyingForPRHereAt60";
import { ResultsApplyingForPRBefore60 } from "./features/results/ResultsApplyingForPRBefore60";

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/results/pr-staying" element={<ResultsPRStaying />} />
        <Route path="/results/pr-leaving-before-60" element={<ResultsPRLeavingBefore60 />} />
        <Route path="/results/whv-leaving" element={<ResultsWHVLeaving />} />
        <Route path="/results/temp-leaving" element={<ResultsTempLeaving />} />
        <Route path="/results/pr-leaving-here-at-60" element={<ResultsPRLeavingHereAt60 />} />
        <Route path="/results/applying-for-pr-here-at-60" element={<ResultsApplyingForPRHereAt60 />} />
        <Route path="/results/applying-for-pr-before-60" element={<ResultsApplyingForPRBefore60 />} />
      </Routes>
    </BrowserRouter>
  );
}

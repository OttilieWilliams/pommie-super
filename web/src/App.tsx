import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./features/home/HomePage";
import { Wizard } from "./features/wizard/Wizard";
import { ResultsPRStaying } from "./features/results/ResultsPRStaying";
import { ResultsPRLeavingBefore60 } from "./features/results/ResultsPRLeavingBefore60";

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/results/pr-staying" element={<ResultsPRStaying />} />
        <Route path="/results/pr-leaving-before-60" element={<ResultsPRLeavingBefore60 />} />
      </Routes>
    </BrowserRouter>
  );
}

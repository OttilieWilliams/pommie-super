interface WizardButtonsProps {
  onBack?: () => void;
  onNext: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
}

export function WizardButtons({
  onBack,
  onNext,
  nextLabel = 'Next',
  nextDisabled = false,
}: WizardButtonsProps) {
  return (
    <div className="flex justify-between items-center mt-12">
      {onBack ? (
        <button
          onClick={onBack}
          className="px-6 py-3 text-slate-600 hover:text-slate-900 transition-colors"
        >
          Back
        </button>
      ) : (
        <div />
      )}
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="px-8 py-3 rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-slate-900 text-white hover:bg-slate-800"
      >
        {nextLabel}
      </button>
    </div>
  );
}

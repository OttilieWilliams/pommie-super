interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="flex justify-center gap-2 mb-12">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-1.5 w-12 rounded-full transition-colors ${
            index < currentStep
              ? 'bg-slate-900'
              : index === currentStep
              ? 'bg-slate-400'
              : 'bg-slate-200'
          }`}
        />
      ))}
    </div>
  );
}

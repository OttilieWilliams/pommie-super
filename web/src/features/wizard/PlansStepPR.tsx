import { ProgressIndicator } from './ProgressIndicator';
import { OptionCard } from './OptionCard';
import { WizardButtons } from './WizardButtons';

interface PlansStepPRProps {
  stayingInAustralia: boolean | null;
  onStayingInAustraliaChange: (value: boolean) => void;
  stayingOver60: boolean | null;
  onStayingOver60Change: (value: boolean) => void;
  onBack: () => void;
  onNext: () => void;
  totalSteps: number;
}

export function PlansStepPR({
  stayingInAustralia,
  onStayingInAustraliaChange,
  stayingOver60,
  onStayingOver60Change,
  onBack,
  onNext,
  totalSteps,
}: PlansStepPRProps) {
  const showAge60Question = stayingInAustralia === false;
  const isComplete =
    stayingInAustralia === true || (showAge60Question && stayingOver60 !== null);

  const getNextLabel = () => {
    if (isComplete) return 'See my results';
    return 'Next';
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <ProgressIndicator currentStep={1} totalSteps={totalSteps} />

      <h2 className="text-3xl text-slate-900 mb-8 text-center">What are your plans?</h2>

      <div className="space-y-4 mb-8">
        <OptionCard
          primary="I plan to stay in Australia"
          secondary="I'm settled here for the long term"
          selected={stayingInAustralia === true}
          onClick={() => onStayingInAustraliaChange(true)}
        />
        <OptionCard
          primary="I'm leaving, or thinking about it"
          secondary="I may return to the UK at some point"
          selected={stayingInAustralia === false}
          onClick={() => onStayingInAustraliaChange(false)}
        />
      </div>

      {showAge60Question && (
        <div className="mt-10 pt-8 border-t border-slate-200">
          <h3 className="text-xl text-slate-900 mb-6">
            Will you still be in Australia when you turn 60?
          </h3>

          <div className="space-y-3 mb-4">
            <OptionCard
              primary="Yes — I'll be here at 60 or later"
              selected={stayingOver60 === true}
              onClick={() => onStayingOver60Change(true)}
            />
            <OptionCard
              primary="No, or I'm not sure"
              selected={stayingOver60 === false}
              onClick={() => onStayingOver60Change(false)}
            />
          </div>

          <p className="text-sm text-slate-500 leading-relaxed">
            This matters because super is locked until age 60. If you're still here, you can
            withdraw it tax-free. If not, you'll pay UK tax when you access it.
          </p>
        </div>
      )}

      <WizardButtons
        onBack={onBack}
        onNext={onNext}
        nextLabel={getNextLabel()}
        nextDisabled={!isComplete}
      />
    </div>
  );
}

import { ProgressIndicator } from './ProgressIndicator';
import { OptionCard } from './OptionCard';
import { WizardButtons } from './WizardButtons';

export type TemporaryPlans = 'leaving' | 'applying-for-pr';

interface PlansStepTemporaryProps {
  selected: TemporaryPlans | null;
  onSelect: (plan: TemporaryPlans) => void;
  stayingOver60: boolean | null;
  onStayingOver60Change: (value: boolean) => void;
  onBack: () => void;
  onNext: () => void;
  totalSteps: number;
}

export function PlansStepTemporary({
  selected,
  onSelect,
  stayingOver60,
  onStayingOver60Change,
  onBack,
  onNext,
  totalSteps,
}: PlansStepTemporaryProps) {
  const options: Array<{ value: TemporaryPlans; primary: string; secondary: string }> = [
    {
      value: 'leaving',
      primary: 'I plan to leave Australia',
      secondary: 'I expect to return home at some point',
    },
    {
      value: 'applying-for-pr',
      primary: "I'm applying for a permanent visa",
      secondary: "I'm hoping to stay long-term",
    },
  ];

  const showAge60Question = selected === 'applying-for-pr';
  const isComplete = selected === 'leaving' || (showAge60Question && stayingOver60 !== null);

  const getNextLabel = () => {
    if (isComplete) return 'See my results';
    return 'Next';
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <ProgressIndicator currentStep={1} totalSteps={totalSteps} />

      <h2 className="text-3xl text-slate-900 mb-8 text-center">What are your plans?</h2>

      <div className="space-y-4 mb-8">
        {options.map((option) => (
          <OptionCard
            key={option.value}
            primary={option.primary}
            secondary={option.secondary}
            selected={selected === option.value}
            onClick={() => onSelect(option.value)}
          />
        ))}
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
            This matters because super is locked until age 60. If you're still here on a permanent
            visa, you can withdraw it tax-free. If not, you'll pay UK tax when you access it.
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

import { ProgressIndicator } from './ProgressIndicator';
import { OptionCard } from './OptionCard';
import { WizardButtons } from './WizardButtons';

export type VisaType = 'working_holiday' | 'temporary' | 'permanent';

interface VisaTypeStepProps {
  selected: VisaType | null;
  onSelect: (visa: VisaType) => void;
  onNext: () => void;
  totalSteps: number;
}

export function VisaTypeStep({ selected, onSelect, onNext, totalSteps }: VisaTypeStepProps) {
  const options: Array<{ value: VisaType; primary: string; secondary: string }> = [
    {
      value: 'working_holiday',
      primary: 'Working Holiday',
      secondary: 'Subclass 417 or 462',
    },
    {
      value: 'temporary',
      primary: 'Other temporary visa',
      secondary: 'Temporary Skill (482/457) · Temporary Partner (820)',
    },
    {
      value: 'permanent',
      primary: 'Permanent resident or citizen',
      secondary: 'Permanent Partner (801) · Any PR visa · Australian Citizen',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <ProgressIndicator currentStep={0} totalSteps={totalSteps} />

      <h2 className="text-3xl text-slate-900 mb-8 text-center">What visa are you on?</h2>

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

      <WizardButtons onNext={onNext} nextDisabled={!selected} />
    </div>
  );
}

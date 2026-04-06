import { useState } from 'react';
import { useNavigate } from 'react-router';
import { VisaTypeStep, VisaType } from './VisaTypeStep';
import { PlansStepTemporary, TemporaryPlans } from './PlansStepTemporary';
import { PlansStepPR } from './PlansStepPR';

export function Wizard() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const [visaType, setVisaType] = useState<VisaType | null>(null);
  const [temporaryPlans, setTemporaryPlans] = useState<TemporaryPlans | null>(null);
  const [stayingInAustralia, setStayingInAustralia] = useState<boolean | null>(null);
  const [stayingOver60, setStayingOver60] = useState<boolean | null>(null);

  const isTemporary = visaType === 'working_holiday' || visaType === 'temporary';
  const isPermanent = visaType === 'permanent';

  const handleVisaNext = () => {
    setCurrentStep(1);
  };

  const handlePlansNext = () => {
    if (isPermanent) {
      if (stayingInAustralia === true) {
        navigate('/results/pr-staying');
        return;
      }
      if (stayingInAustralia === false) {
        if (stayingOver60 === false) {
          navigate('/results/pr-leaving-before-60');
          return;
        }
        // TODO: stayingOver60 === true → /results/pr-leaving-here-at-60
        return;
      }
    }

    if (isTemporary) {
      if (temporaryPlans === 'leaving') {
        if (visaType === 'working_holiday') {
          navigate('/results/whv-leaving');
          return;
        }
        // TODO: visaType === 'temporary' → /results/temp-leaving
        return;
      }
      if (temporaryPlans === 'applying-for-pr') {
        // TODO: navigate based on stayingOver60
        // stayingOver60 === true  → /results/pr-leaving-here-at-60
        // stayingOver60 === false → /results/pr-leaving-before-60
        return;
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {currentStep === 0 && (
        <VisaTypeStep
          selected={visaType}
          onSelect={setVisaType}
          onNext={handleVisaNext}
          totalSteps={2}
        />
      )}

      {currentStep === 1 && isTemporary && (
        <PlansStepTemporary
          selected={temporaryPlans}
          onSelect={setTemporaryPlans}
          stayingOver60={stayingOver60}
          onStayingOver60Change={setStayingOver60}
          onBack={() => setCurrentStep(0)}
          onNext={handlePlansNext}
          totalSteps={2}
        />
      )}

      {currentStep === 1 && isPermanent && (
        <PlansStepPR
          stayingInAustralia={stayingInAustralia}
          onStayingInAustraliaChange={setStayingInAustralia}
          stayingOver60={stayingOver60}
          onStayingOver60Change={setStayingOver60}
          onBack={() => setCurrentStep(0)}
          onNext={handlePlansNext}
          totalSteps={2}
        />
      )}
    </div>
  );
}

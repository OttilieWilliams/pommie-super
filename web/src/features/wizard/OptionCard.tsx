interface OptionCardProps {
  primary: string;
  secondary?: string;
  selected: boolean;
  onClick: () => void;
}

export function OptionCard({ primary, secondary, selected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-lg border-2 transition-all ${
        selected
          ? 'border-slate-900 bg-slate-50'
          : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`mt-1 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
            selected ? 'border-slate-900' : 'border-slate-300'
          }`}
        >
          {selected && <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />}
        </div>
        <div>
          <div className="text-slate-900 mb-1">{primary}</div>
          {secondary && <div className="text-sm text-slate-500">{secondary}</div>}
        </div>
      </div>
    </button>
  );
}

export function WorkInProgressBanner() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
      <p className="text-sm text-amber-900 leading-relaxed">
        <strong>⚠️ Work in progress:</strong> PommieSuper is a work in progress. Calculations
        may contain errors. If you spot anything that looks wrong, please{' '}
        <a
          href="https://github.com/OttilieWilliams/pommie-super/issues"
          className="underline hover:text-amber-700"
          target="_blank"
          rel="noreferrer"
        >
          open an issue on GitHub
        </a>
        .
      </p>
    </div>
  );
}

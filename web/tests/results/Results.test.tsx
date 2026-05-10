import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import { ResultsWHVLeaving } from '../../src/features/results/ResultsWHVLeaving';
import { ResultsTempLeaving } from '../../src/features/results/ResultsTempLeaving';
import { ResultsApplyingForPRHereAt60 } from '../../src/features/results/ResultsApplyingForPRHereAt60';
import { ResultsApplyingForPRBefore60 } from '../../src/features/results/ResultsApplyingForPRBefore60';
import { ResultsPRStaying } from '../../src/features/results/ResultsPRStaying';
import { ResultsPRLeavingHereAt60 } from '../../src/features/results/ResultsPRLeavingHereAt60';
import { ResultsPRLeavingBefore60 } from '../../src/features/results/ResultsPRLeavingBefore60';

function renderInRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

function assertDisclaimers() {
  expect(screen.getByText(/PommieSuper is for general information only/)).toBeInTheDocument();
  expect(screen.getByText(/PommieSuper is a work in progress/)).toBeInTheDocument();
}

describe('Results pages', () => {
  it('ResultsWHVLeaving renders headline and disclaimers', () => {
    renderInRouter(<ResultsWHVLeaving />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "The tax case for extra contributions doesn't stack up"
    );
    assertDisclaimers();
  });

  it('ResultsTempLeaving renders headline and disclaimers', () => {
    renderInRouter(<ResultsTempLeaving />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "The tax case for extra contributions doesn't stack up"
    );
    assertDisclaimers();
  });

  it('ResultsApplyingForPRHereAt60 renders headline and disclaimers', () => {
    renderInRouter(<ResultsApplyingForPRHereAt60 />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The tax case for contributing is strong'
    );
    assertDisclaimers();
  });

  it('ResultsApplyingForPRBefore60 renders headline and disclaimers', () => {
    renderInRouter(<ResultsApplyingForPRBefore60 />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The tax case depends on your UK tax rate at retirement'
    );
    assertDisclaimers();
  });

  it('ResultsPRStaying renders headline and disclaimers', () => {
    renderInRouter(<ResultsPRStaying />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The tax case for contributing is strong'
    );
    assertDisclaimers();
  });

  it('ResultsPRLeavingHereAt60 renders headline and disclaimers', () => {
    renderInRouter(<ResultsPRLeavingHereAt60 />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The tax case for contributing is strong'
    );
    assertDisclaimers();
  });

  it('ResultsPRLeavingBefore60 renders headline and disclaimers', () => {
    renderInRouter(<ResultsPRLeavingBefore60 />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The tax case depends on your UK tax rate at retirement'
    );
    assertDisclaimers();
  });
});

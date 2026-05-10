import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FinancialDisclaimer } from '../../src/components/FinancialDisclaimer';

describe('FinancialDisclaimer', () => {
  it('renders required disclaimer text', () => {
    render(<FinancialDisclaimer />);
    expect(screen.getByText(/PommieSuper is for general information only/)).toBeInTheDocument();
    expect(screen.getByText(/not financial advice/)).toBeInTheDocument();
    expect(screen.getByText(/Consult a qualified adviser/)).toBeInTheDocument();
  });
});

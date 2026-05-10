import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { WorkInProgressBanner } from '../../src/components/WorkInProgressBanner';

describe('WorkInProgressBanner', () => {
  it('renders required banner text and GitHub link', () => {
    render(<WorkInProgressBanner />);
    expect(screen.getByText(/PommieSuper is a work in progress/)).toBeInTheDocument();
    expect(screen.getByText(/Calculations may contain errors/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'open an issue on GitHub' })).toBeInTheDocument();
  });
});

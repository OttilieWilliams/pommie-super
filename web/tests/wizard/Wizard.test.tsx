import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { Wizard } from '../../src/features/wizard/Wizard';

const mockNavigate = vi.fn();

vi.mock('react-router', async () => ({
  ...(await vi.importActual('react-router')),
  useNavigate: () => mockNavigate,
}));

function renderWizard() {
  return render(
    <MemoryRouter>
      <Wizard />
    </MemoryRouter>
  );
}

async function selectVisa(user: ReturnType<typeof userEvent.setup>, label: string) {
  await user.click(screen.getByText(label));
  await user.click(screen.getByRole('button', { name: 'Next' }));
}

async function clickResults(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('button', { name: 'See my results' }));
}

describe('Wizard routing', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('Working Holiday + leaving → /results/whv-leaving', async () => {
    const user = userEvent.setup();
    renderWizard();

    await selectVisa(user, 'Working Holiday');
    await user.click(screen.getByText('I plan to leave Australia'));
    await clickResults(user);

    expect(mockNavigate).toHaveBeenCalledWith('/results/whv-leaving');
  });

  it('Other temporary + leaving → /results/temp-leaving', async () => {
    const user = userEvent.setup();
    renderWizard();

    await selectVisa(user, 'Other temporary visa');
    await user.click(screen.getByText('I plan to leave Australia'));
    await clickResults(user);

    expect(mockNavigate).toHaveBeenCalledWith('/results/temp-leaving');
  });

  it('Working Holiday + applying for PR + here at 60 → /results/applying-for-pr-here-at-60', async () => {
    const user = userEvent.setup();
    renderWizard();

    await selectVisa(user, 'Working Holiday');
    await user.click(screen.getByText("I'm applying for a permanent visa"));
    await user.click(screen.getByText("Yes — I'll be here at 60 or later"));
    await clickResults(user);

    expect(mockNavigate).toHaveBeenCalledWith('/results/applying-for-pr-here-at-60');
  });

  it('Working Holiday + applying for PR + before 60 → /results/applying-for-pr-before-60', async () => {
    const user = userEvent.setup();
    renderWizard();

    await selectVisa(user, 'Working Holiday');
    await user.click(screen.getByText("I'm applying for a permanent visa"));
    await user.click(screen.getByText("No, or I'm not sure"));
    await clickResults(user);

    expect(mockNavigate).toHaveBeenCalledWith('/results/applying-for-pr-before-60');
  });

  it('Other temporary + applying for PR + here at 60 → /results/applying-for-pr-here-at-60', async () => {
    const user = userEvent.setup();
    renderWizard();

    await selectVisa(user, 'Other temporary visa');
    await user.click(screen.getByText("I'm applying for a permanent visa"));
    await user.click(screen.getByText("Yes — I'll be here at 60 or later"));
    await clickResults(user);

    expect(mockNavigate).toHaveBeenCalledWith('/results/applying-for-pr-here-at-60');
  });

  it('Other temporary + applying for PR + before 60 → /results/applying-for-pr-before-60', async () => {
    const user = userEvent.setup();
    renderWizard();

    await selectVisa(user, 'Other temporary visa');
    await user.click(screen.getByText("I'm applying for a permanent visa"));
    await user.click(screen.getByText("No, or I'm not sure"));
    await clickResults(user);

    expect(mockNavigate).toHaveBeenCalledWith('/results/applying-for-pr-before-60');
  });

  it('Permanent + staying → /results/pr-staying', async () => {
    const user = userEvent.setup();
    renderWizard();

    await selectVisa(user, 'Permanent resident or citizen');
    await user.click(screen.getByText('I plan to stay in Australia'));
    await clickResults(user);

    expect(mockNavigate).toHaveBeenCalledWith('/results/pr-staying');
  });

  it('Permanent + leaving + here at 60 → /results/pr-leaving-here-at-60', async () => {
    const user = userEvent.setup();
    renderWizard();

    await selectVisa(user, 'Permanent resident or citizen');
    await user.click(screen.getByText("I'm leaving, or thinking about it"));
    await user.click(screen.getByText("Yes — I'll be here at 60 or later"));
    await clickResults(user);

    expect(mockNavigate).toHaveBeenCalledWith('/results/pr-leaving-here-at-60');
  });

  it('Permanent + leaving + before 60 → /results/pr-leaving-before-60', async () => {
    const user = userEvent.setup();
    renderWizard();

    await selectVisa(user, 'Permanent resident or citizen');
    await user.click(screen.getByText("I'm leaving, or thinking about it"));
    await user.click(screen.getByText("No, or I'm not sure"));
    await clickResults(user);

    expect(mockNavigate).toHaveBeenCalledWith('/results/pr-leaving-before-60');
  });
});

import { render, screen } from '@testing-library/react';

describe('first test', () => {
  it('render h1', () => {
    render(<h1>SHOULD BE RENDER</h1>);
    
    expect(screen.getByRole('heading')).not.toBeNull();
  });
});
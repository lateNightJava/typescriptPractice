import { add } from './add';

describe('Add Function', () => {
  it('Adds two numbers', () => {
    // not safe when add(x: string, y: string): string
    // passes test and does not properly type check
    // expect(add(1,2)).toEqual(3);
    expect(add(1,2)).toBe(3);
  });
});

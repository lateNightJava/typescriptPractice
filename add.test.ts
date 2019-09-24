import { add } from './add';

describe('Add Function', () => {
  it('Adds two numbers', () => {
    expect(add(1,2)).toEqual(3);
  });
});

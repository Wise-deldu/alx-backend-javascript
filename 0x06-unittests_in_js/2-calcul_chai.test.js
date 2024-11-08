// Importing the `expect` function from Chai for assertions
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('handles adding two rounded numbers when type is SUM', () => {
    // Using expect to check the result when adding two rounded numbers
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
  });

  it('handles subtracting two rounded numbers when type is SUBTRACT', () => {
    // Using expect to check the result when subtracting two rounded numbers
    expect(calculateNumber('SUBTRACT', 5.9, 2.3)).to.equal(4);
    expect(calculateNumber('SUBTRACT', -5.9, -2.3)).to.equal(-4);
  });

  it('handles dividing two rounded numbers when type is DIVIDE', () => {
    // Using expect to check the result when dividing two rounded numbers
    expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
  });

  it('returns Error when dividing by 0', () => {
    // Using expect to check for an error message when dividing by zero
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -8, 0)).to.equal('Error');
  });

  it('throws an error when an invalid type is provided', () => {
    // Using expect to check that an error is thrown when an invalid type is passed
    expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw(Error);
  });
});

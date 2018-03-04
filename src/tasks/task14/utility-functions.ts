namespace Utility {
  export function MaxBooksAllowed(age: number): number {
    return age < 12 ? 3 : 10;
  }
  export function privateFunc(): void {
    console.log('This is private');
  }
}

namespace Utility.Fees {
  export function CalculateLateFee(daysLate: number): number {
    return daysLate * .25;
  }
}

import util = Utility.Fees;
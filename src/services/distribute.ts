export function distributeMoney(userCount: number, totalAmount: number): ReadonlyArray<number> {
  const MIN_AMOUNT: number = 0.01

  let distributedAmountList: number[] = []; 
  let remainingUser: number = userCount;
  let remainingAmount: number = totalAmount;

  for(let userIndex = 0; userIndex < userCount; userIndex++) {
    if (userIndex == userCount - 1) {
      distributedAmountList.push(Math.round(remainingAmount * 100) / 100);
      break;
    }

    let maxAmount: number = (remainingAmount/remainingUser) * 2;
    let randomAmount = Math.random() * (maxAmount - MIN_AMOUNT) + MIN_AMOUNT;
    let roundedAmount = Math.round(randomAmount * 100) / 100;

    if (roundedAmount <= 0 && remainingAmount <= 0) {
      distributedAmountList = distributedAmountList.concat(Array(remainingUser).fill(0))
      remainingUser = 0;
      break
    }
    
    distributedAmountList.push(roundedAmount);
    remainingAmount -= roundedAmount;
    remainingUser--;
  }
  
  return distributedAmountList;
}
 

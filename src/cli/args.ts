function isValidRoundedAmount(amountStr: string): boolean {
  const roundedAmount = amountStr.split(".");

  if (roundedAmount.length === 1) return true;
  const decimal = roundedAmount[1];

  if (decimal.length <= 2) return true; 
  return false;
}

export function parseArguments(args: string[]): { userCount: number; totalAmount: number } {
  const userCountArg = args.find((arg) => arg.startsWith("--user="));
  const totalAmountArg = args.find((arg) => arg.startsWith("--amount="));

  if (!userCountArg || !totalAmountArg) {
    throw new Error("Usage: --user=<count> --amount=<amount>");
  }
  
  const userCount = Number(userCountArg.split("=")[1]);
  const totalAmount = Number(totalAmountArg.split("=")[1]);

  if (
    isNaN(userCount) || 
    isNaN(totalAmount) || 
    userCount <= 0 || 
    totalAmount <= 0 || 
    userCount % 1 !== 0 ||
    !isValidRoundedAmount(totalAmountArg.split("=")[1])
  ) {
    throw new Error("Invalid input: --user must be a whole number > 0, --amount must be a positive number.");
  }

  return { userCount, totalAmount };
}

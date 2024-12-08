import { parseArguments } from "./cli/args"
import { distributeMoney } from "./services/distribute"

const args = process.argv.slice(2);

try {
  const { userCount, totalAmount } = parseArguments(args);
  const distributedAmounts: ReadonlyArray<number>= distributeMoney(userCount, totalAmount);
  
  for (let user = 0; user < distributedAmounts.length; user++) {
    console.log(`User ${user + 1} get: $${distributedAmounts[user]}`);
  }

} catch (error) {
  console.log(`${error}`);

  console.log("\nUsage:");
  console.log("npm run start -- --user=<count> --amount=<amount>");
  console.log("--user: whole number > 0");
  console.log("--amount: positive number with up to two decimal places");
  process.exit(1);
}

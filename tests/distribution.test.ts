import {describe, expect, test} from '@jest/globals';
import {distributeMoney} from '../src/services/distribute'

describe("Money distribution test", () => {
  test("List should equal to user count", () => {
    const USER_COUNT: number = 5;
    const DISTRIBUTE_AMOUNT: number = 100;

    const distributedMoneyList = distributeMoney(USER_COUNT, DISTRIBUTE_AMOUNT)
    expect(distributedMoneyList.length).toBe(5)
  })

  test("Distributed money should sum up to initial amount with whole number", () => {
    const USER_COUNT: number = 5;
    const DISTRIBUTE_AMOUNT: number = 100;

    const distributedMoneyList = distributeMoney(USER_COUNT, DISTRIBUTE_AMOUNT);
    const totalAmount = distributedMoneyList.reduce((sum, value) => sum + value, 0);

    expect(Number(totalAmount.toFixed(2))).toBe(DISTRIBUTE_AMOUNT);
  })

  test("Distributed money should sum up to initial amount with decimal", () => {
    const USER_COUNT: number = 5;
    const DISTRIBUTE_AMOUNT: number = 123.45;

    const distributedMoneyList = distributeMoney(USER_COUNT, DISTRIBUTE_AMOUNT);
    const totalAmount = distributedMoneyList.reduce((sum, value) => sum + value, 0);

    expect(Number(totalAmount.toFixed(2))).toBe(DISTRIBUTE_AMOUNT)
  })
  
  test("Distributed money should not have negative amount", () => {
    const USER_COUNT: number = 99;
    const DISTRIBUTE_AMOUNT: number = 9.99;

    const distributedMoneyList = distributeMoney(USER_COUNT, DISTRIBUTE_AMOUNT);
    const hasNegativeAmount = distributedMoneyList.some((value) => value < 0);

    expect(hasNegativeAmount).toBeFalsy();
  })

  test("Distribute money with one user should return the total amount", () => {
    const USER_COUNT = 1;
    const DISTRIBUTE_AMOUNT = 123.45;

    const distributedMoneyList = distributeMoney(USER_COUNT, DISTRIBUTE_AMOUNT);
    expect(distributedMoneyList.length).toBe(1);
    expect(distributedMoneyList[0]).toBe(DISTRIBUTE_AMOUNT);
  });
})

import {describe, expect, test} from "@jest/globals";
import {parseArguments} from "../src/cli/args"


describe("Argument parser test", () => {
  test("Should parse valid arguments correctly", () => {
    const args = ["--user=5", "--amount=123.45"];
    const result = parseArguments(args);
    expect(result).toEqual({ userCount: 5, totalAmount: 123.45 });
  });

  test("Should throw an error if --user is missing", () => {
    const args = ["--amount=123.45"];
    expect(() => parseArguments(args)).toThrow("Usage: --user=<count> --amount=<amount>");
  });

  test("Should throw an error if --amount is missing", () => {
    const args = ["--user=5"];
    expect(() => parseArguments(args)).toThrow("Usage: --user=<count> --amount=<amount>");
  });

  test("Should throw an error if --user is not a number", () => {
    const args = ["--user=abc", "--amount=123.45"];
    expect(() => parseArguments(args)).toThrow("Invalid input: --user must be a whole number > 0, --amount must be a positive number.");
  });

  test("Should throw an error if --amount is not a number", () => {
    const args = ["--user=5", "--amount=abc"];
    expect(() => parseArguments(args)).toThrow("Invalid input: --user must be a whole number > 0, --amount must be a positive number.");
  });

  test("Should throw an error if --user is less than or equal to 0", () => {
    const args = ["--user=0", "--amount=123.45"];
    expect(() => parseArguments(args)).toThrow("Invalid input: --user must be a whole number > 0, --amount must be a positive number.");
  });

  test("Should throw an error if --user is not an integer", () => {
    const args = ["--user=5.5", "--amount=123.45"];
    expect(() => parseArguments(args)).toThrow("Invalid input: --user must be a whole number > 0, --amount must be a positive number.");
  });

  test("Should throw an error if --amount is less than or equal to 0", () => {
    const args = ["--user=5", "--amount=0"];
    expect(() => parseArguments(args)).toThrow("Invalid input: --user must be a whole number > 0, --amount must be a positive number.");
  });

  test("Should throw an error if --amount has more than two decimal places", () => {
    const args = ["--user=5", "--amount=123.456"];
    expect(() => parseArguments(args)).toThrow("Invalid input: --user must be a whole number > 0, --amount must be a positive number.");
  });

  test("Should handle mixed argument order", () => {
    const args = ["--amount=123.45", "--user=5"];
    const result = parseArguments(args);
    expect(result).toEqual({ userCount: 5, totalAmount: 123.45 });
  });

  test("Should able to parse if --amount has less than two decimal places", () => {
    const args_1 = ["--amount=123.4", "--user=5"];
    const result_1 = parseArguments(args_1);
    expect(result_1).toEqual({ userCount: 5, totalAmount: 123.4 });


    const args_2 = ["--amount=123.", "--user=5"];
    const result_2 = parseArguments(args_2);
    expect(result_2).toEqual({ userCount: 5, totalAmount: 123. });
  });
})

# Money Random Distribution Program
A program that allow to distribute money randomly 

## Tech Use
- TypeScript

## To Complete
- [x]  Implement main distribution service
- [x]  Unit Test

## Prerequisite 
- npm (version 10.9.0 is used on this project)
- node.js (version 18.20.5 of Node.js is used on this project)

## Getting Started
Clone the project to the local 
```
git clone git@github.com:jh-tan/money-distribution.git
```

Once done, install the dependencies
```
npm install
```

Run the program
```
npm run start -- --user=<number of user> --amount=<amount to be distribute>
```

## Arguments

`--user`: Number of user to distribute to

`--amount`: Amount of money to distribute to

| Arguments    | Format  |
| -----------  | ------- | 
| --user       | whole number (Example: 9, 9.0)  | 
| --amount     | positive number with up to two decimal places (Example: 12., 12.3, 12.34)| 


## Example
Here is an example on how to run the program
```
npm run start -- --user=5  --amount=123.12
```

## Responses
The program will print out the amount of money that each of the person will get
```
User 1 get: $41.73
User 2 get: $19.43
User 3 get: $13.51
User 4 get: $30.88
User 5 get: $17.57
```

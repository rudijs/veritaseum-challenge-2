# veritaseum-challenge-2

## Install

- `cd veritaseum-challenge-2`
- `npm install`
- `npm test`

## Fixes

- Fix undefined check before null check
- Add public getAllIds() method.

## Comments

_all_ids is an array:

`var _all_ids = new Array();`

If the id is an integer, for example 100, then `_lookupOrCreateExpensiveResourceById` will create an array of 101 items.

So it's assumed id will be a string, therefore _all_ids should probably be and object literal:

`var _all_ids = {};`

## Test

`npm test`

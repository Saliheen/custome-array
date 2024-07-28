# Custom Array Implementation in JavaScript

## Overview

This repository contains a custom implementation of an array-like data structure in JavaScript. It demonstrates fundamental operations and advanced methods to help you understand how arrays work internally and how you can extend them.

## Features

- **Core Methods:** `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, and `forEach`.
- **Advanced Methods:** `map`, `filter`, and `reduce`.
- **Error Handling:** Includes input validation and error handling for robust operations.
- **Iterability:** Supports iteration with `for...of` loops.

## Usage

You can instantiate the custom array and use it just like a standard array:

```javascript
const myArray = new MyArray();
myArray.push(4);
console.log(myArray.get(0)); // Outputs: 4

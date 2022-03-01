<h1 align="center">simuf0 Polyfills - v.1.0.1</h1>

<p align="center">
  <i>The large JS native's classes extension.</i>
</p>

<br>

## Installation

### Install package

```
npm install @simuf0/polyfills
```

### Usage

#### Import statement:

```js
import polyfills from "@simuf0/polyfills";
```

#### Require statement:

```js
require('@simuf0/polyfills');
```

<br>

## Array extensions

### Array.prototype.empty

```ts
Array.prototype.empty(): boolean;
```

Check if an array is empty.

<br>

## String extensions

### String.whitespace

```ts
String.whitespace(length?: number): string;
```

Return a non-breakable whitespaces string depending on the length parameter.

Parameters :

`length: number` (Optional) The length of the whitespaces to generate. Default 1.

<br>

### String.prototype.empty

```ts
String.prototype.empty(): boolean;
```

Check if a string is empty.

<br>

### String.prototype.sprintf

```ts
String.prototype.sprintf(...args: any[]): string;
```

Returns a formatted string.

Parameters :

`args: Array<string>` (Optional) The replacement values.

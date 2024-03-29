import { sprintf } from "sprintf-js";

Array.prototype.empty = function () {
  return this.length == 0;
}

String.whitespace = function (length: number = 1): string {
  let whitespace = '';
  for (let i = 0; i < length; i++) whitespace += '\u00A0';
  return whitespace;
}

String.prototype.empty = function () {
  return this.length == 0;
}

String.prototype.sprintf = function (...args: any[]): string {
  return sprintf(this.toString(), ...args);
}
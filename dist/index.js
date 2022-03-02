"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sprintf_js_1 = require("sprintf-js");
Array.prototype.empty = function () {
    return this.length == 0;
};
String.whitespace = function (length = 1) {
    let whitespace = '';
    for (let i = 0; i < length; i++)
        whitespace += '\u00A0';
    return whitespace;
};
String.prototype.empty = function () {
    return this.length == 0;
};
String.prototype.sprintf = function (...args) {
    return (0, sprintf_js_1.sprintf)(this.toString(), ...args);
};

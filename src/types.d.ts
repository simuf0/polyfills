interface Array<T> {
    empty(): boolean;
}

interface StringConstructor {
  whitespace(size?: number): string;
}

interface String {
  empty(): boolean;
  sprintf(...args: any[]): string;
}
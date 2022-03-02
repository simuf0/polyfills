interface Array<T> {
    empty(): boolean;
}
interface StringConstructor {
    whitespace(length?: number): string;
}
interface String {
    empty(): boolean;
    sprintf(...args: any[]): string;
}

// With strictNullChecks set to false

let a: number[] = [1, 12, 93, 5];
let b: string[] = ["a", "apricot", "mango"];
let c: number[] = [1, "apple", "potato"]; // Error
let d: Array<number> = [null, undefined, 10, 15];
let e: Array<string> = ["pie", null, ""];

// With strictNullChecks set to true

let a: number[] = [1, 12, 93, 5];
let b: string[] = ["a", "apricot", "mango"];
let c: number[] = [1, "apple", "potato"]; // Error
let d: Array<number> = [null, undefined, 10, 15]; // Error
let e: Array<string> = ["pie", null, ""]; // Error
let a: never; // Ok
let b: never = false; // Error
let c: never = null; // Error
let d: never = "monday"; // Error

function stuck(): never {
    while (true) {
    }
}
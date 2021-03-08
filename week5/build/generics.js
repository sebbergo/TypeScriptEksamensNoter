"use strict";
function reverseArr(array) {
    return array.reverse();
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
//console.log(reverseArr<number>(["a","b","c"]));
class DataHolder {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
}
let d = new DataHolder("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());
let d2 = new DataHolder(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());
//# sourceMappingURL=generics.js.map
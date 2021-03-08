interface IStrings{
    (s1: string, s2: string, s3: string): string[]
}

let myFunc: IStrings = function (a, b, c) {
    let arr = [a, b, c]
    return arr
}

let upperCased: IStrings = function (s1, s2, s3){
    let arr = [s1, s2, s3]
    let result: string[] = []

    arr.forEach(element => {
        result.push(element.toUpperCase())
    });

    return result
}

console.log(myFunc("hej", "med", "dig"));
console.log(upperCased("hej", "med", "dig"));

let f2 = function logger(f1: IStrings){
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}

function fakeFunction(a: string, b: string, c: string){
    let array = [a, b, c]
}

//hvis ikke reference metoden har samme ting som metoden i interface,
//så giver den en fejl. I dette tilfælde er det reference til en metode,
//som der ikke returnerer et array, some IStrings gør
//f2(fakeFunction)
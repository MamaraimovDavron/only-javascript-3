let a = 14;
let b = -14;
let c = 14;

if((a === b || b === c) && a !== c){
    console.log(c);
}

else if ((b === a || a === c) && b !== c){
    console.log(b);
}

else if ((a === c || c === b) && b !== a){
    console.log(a);
}

else console.log("Bunday son emas!");
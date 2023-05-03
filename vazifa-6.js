let a = -1;
let b = 11;
let c = 111;

let counter = 0;

if(a > 0 || b > 0 || c > 0){
    if(a >= 10 && a <= 99){
        counter++;
        // console.log(counter)
    }

    if(b >= 10 && b <= 99){
        counter++;
        // console.log(counter)
    }

    if(c >= 10 && c <= 99){
        counter++;
        // console.log(counter)
    }

    console.log(counter + " tasi musbat ikki xonali son!")
}

else {
    console.log("Berilgan son musbat emas!")
}
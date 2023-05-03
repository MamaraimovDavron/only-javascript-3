let a = 11;
let b = 51;
let c = 3;

let counter = 0;

if(a >= 10 && a <= 99 && a > 0){
    counter++;

    if(b >= 10 && b <= 99 && b > 0){
        counter++;

        if(c >= 10 && c <= 99 && c > 0){
            counter++;
        }
    }

    console.log(counter + " tasi musbat ikki xonali son!");
}  

else console.log("Hammasi musbat ikki xonali son emas!");

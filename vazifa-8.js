let a = 23;
let b = 25;
let c = 100;

if((a > b && a > c)){
    if(b > c){
        console.log(Math.abs(a - b));
    }
    else {
        console.log(Math.abs(a - c));
    }
}

else if((b > a && b > c)){
    if(a > c){
        console.log(Math.abs(b - a));
    }

    else{
        console.log(Math.abs(b - c));
    }
}

else if((c > b && c > a)){
    if(b > a){
        console.log(Math.abs(c - b));
    }

    else{
        console.log(Math.abs(c - a));
    }
}

else {
    console.log("Bunday emas!");
}
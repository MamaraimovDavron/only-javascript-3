let a = -11;
let b = -3;
let c = 0;

if((a + b > b + c) && (a + b > a + c)){
    console.log(a + ", " + b);
}

else if((b + c > a + b) && (b + c > a + c)){
    console.log(b + ", " + c);
}

else if((a + c > a + b) && (a + c > b + c)){
    console.log(a + ", " + c);
}
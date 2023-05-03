let x = -1315;
let y = 0;
let z = 51123;


if((x > y && x > z) && (y > z)){
    console.log("O`sish tartibida = " + z + ', ' + y + ', ' + x);
}

else if ((x > y && x > z) && (z > y)){
    console.log("O`sish tartibida = " + y + ', ' + z + ', ' + x);
}

else if ((y > x && y > z) && (z > x)){
    console.log("O`sish tartibida = " + x + ', ' + z + ', ' + y);
}

else if ((y > x && y > z) && (x > z)){
    console.log("O`sish tartibida = " + z + ', ' + x + ', ' + y);
}

else if ((z > x && z > y) && (x > y)){
    console.log("O`sish tartibida = " + y + ', ' + x + ', ' + z);
}

else if ((z > x && z > y) && (y > x)){
    console.log("O`sish tartibida = " + x + ', ' + y + ', ' + z);
}



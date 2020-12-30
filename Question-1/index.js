function printStarit(number) {
    if (number > 0){
       console.log("Star It Ltd.");
       printStarit(number-1)
    }
 }
 
 printStarit(10);
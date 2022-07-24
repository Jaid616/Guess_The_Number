const numcheck = document.getElementById("numcheck");
const numchecknew = document.getElementById("numchecknew");
let randomnum = Math.floor(Math.random() * 50) + 1;


console.log(randomnum);
let counter = 1;
let second = 5;
fun12 = () => {
  const cou = document.getElementById("counter1");
  let num = document.getElementById("num").value;

  let newnum = num.toString();
  let newnum1;
  if (newnum.includes(".")) {
    numcheck.innerText = "Please Dont Enter Point number";
    document.getElementById("num").value = "";
  } else {
    newnum1 = parseInt(newnum);
    if (isNaN(newnum1)) {
      numcheck.innerText = "Please Dont Enter The Alphabet or Other number";
      document.getElementById("num").value = "";
    } else {
      if (newnum1 == randomnum) {
        numcheck.innerText = `You Guess The Correct Number in ${counter} Attemped and Your Lucky Number is ${randomnum} `;
        document.getElementById("num").value = "";
       setTimeout(() => {
            
           myinterval = setInterval(() => {
             if(second ==0){
               clearInterval(myinterval);
               numchecknew.innerText = "";
               numcheck.innerText = "";
               second = 5;
               }
             else{
               second--;
               numchecknew.innerText = `New Number will be Generated in ${second} Sec`;
             }  
           }, 1000);



        
       });

       

        setTimeout(() => {
          counter = 1;
          randomnum = Math.floor(Math.random() * 50) + 1;
          console.log(randomnum);
        }, 5000);
      }

      if (newnum1 > randomnum) {
        numcheck.innerText = "Your Number is Greater Than Lucky Number";
        document.getElementById("num").value = "";
      }
      if (newnum1 < randomnum) {
        numcheck.innerText = "Your Number is Less Than Lucky Number";
        document.getElementById("num").value = "";
      }
    }
  }
  counter++;
};

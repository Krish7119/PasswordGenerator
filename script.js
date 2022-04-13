let constants = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
let expression = ["!","@","#","$","%","^","&","*","<",">","?"];
let numbers=[1,2,3,4,5,6,7,8,9];
let P1 = document.getElementById("password-1");
let P2 = document.getElementById("password-2");
let P3 = document.getElementById("password-3");
let P4 = document.getElementById("password-4");





function generate(){
    let val1 = [];
    let val2 = [];
    let val3 = [];
    let val4 = [];
    let content1= createPassword(val1);
    let content2= createPassword(val2);
    let content3= createPassword(val3);
    let content4= createPassword(val4);
   

    let shuffledArray1= shuffleArray(content1);
    let shuffledArray2= shuffleArray(content2);
    let shuffledArray3= shuffleArray(content3);
    let shuffledArray4= shuffleArray(content4);

  

    let passwordOne = shuffledArray1.join(''); 
    let passwordTwo = shuffledArray2.join(''); 
    let passwordThre = shuffledArray3.join(''); 
    let passwordFour = shuffledArray4.join(''); 
    
    console.log(passwordOne);
    console.log(passwordTwo);
    console.log(passwordThre);
    console.log(passwordFour);

    P1.textContent = passwordOne;
    P2.textContent = passwordTwo;
    P3.textContent = passwordThre;
    P4.textContent = passwordFour;



}

function createPassword(arr)
{
    for(let i=0 ; i<5 ; i++){
          let RandomC = Math.floor(Math.random()*50);
        arr.push(constants[RandomC]);
    }
    for(let i=0 ; i<5 ; i++){
         let RandomE = Math.floor(Math.random()*10);
        arr.push(expression[RandomE]);
    }
    for(let i=0 ; i<5 ; i++){
         let RandomN = Math.floor(Math.random()*8);
        arr.push(numbers[RandomN]);
    }

return  arr;
}

function shuffleArray(arr){
    for(let i= arr.length-1 ; i>0 ;i--)
    {
        let j = Math.floor(Math.random()*(arr.length-2) );
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }

    return arr;
}

// ///////////////////////////////Copy to clipboard///////////////////////////////////////////

    function Event(val){

    val.addEventListener('click', () => {
    const thePassword = val.textContent;
    navigator.clipboard.writeText(thePassword);
    alert("Password : " + val.textContent +"  Copied" );

})

}

Event(P1);
Event(P2);
Event(P3);
Event(P4);
//////////////////////////////////////////////////////////////////////////////////////////////

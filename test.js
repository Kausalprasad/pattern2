Qustion 1
Ans: "The entry control loop are kind are loops to checked the condition befor running like while loop and for loop"
Syantx;
"This is for loop first we intizition the value then check the condition and then incremnet or decremnet"
for(let i=1;i<=10;i++){
    console.log(i)
}
"this is while loop its also wrok like a for loop but we used while loop when we don't no who much condition run"
let a=0;
while(a<10){
    console.log(a)
}

Ans:"The exit control loop is first run the statemnet and then checked the condition "
Syantx:
do{
    console.log("hey")
    a++;
}while(a<10);



Question 2;
3
4
3
5
4
5


Question 3;
1 1
1 2
1 3
2 1
2 2

Question 4;
*
**
***
****
*****

Question 5;
let n=5;
for(let i=1;i<=n;i++){
    for(let k=1;k<=i;k++){
        process.stdout.write(" ")
    }
    for(let j=n;j>=i;j--){
        process.stdout.write("*")
    }
    console.log()
}

Question 6
function findPrime(n){
for(let i=2;i<=n;i++){

    if(i%2!=0&&i%3!=0&&i%5!=0&&i%7!=0){
        console.log(i)
    }
    else if(i==2||1==3||i==5||i==7){
        console.log(i);
    }
    else{
        continue;
    }
}
}
findPrime(100)

    
  
Quesiton 7
function decimaltoAnybase(num, base){
    let ans=0;
    let pow=1;
    while (num>0) {
        let rem=num%base;
         num=Math.floor(num/base);
        rem=rem*pow;
        ans=ans+rem
        pow=pow*10     
    }
   return ans
}
//  console.log(decimaltoAnybase(34,2))

 function anyBasetoDecimal(num, base){
    let ans=0;
    let pow=1;
    while (num>0) {
        let rem=num%10;
         num=Math.floor(num/10);
        rem=rem*pow;
        ans=ans+rem
        pow=pow*base   
    }
   return ans
}
 console.log(anyBasetoDecimal(578,8))


 function  anyBasetoanybase(num ,currentBase, base) {
   let decimalNumber= anyBasetoDecimal(num,currentBase);
  let final= decimaltoAnybase(decimalNumber,base);
  return final; 
 }
 let rv=anyBasetoanybase(67,8,8);
 console.log(rv);

Question 8
function addanyBase(num1 ,num2 ,base){
    let ans=0;
    let carry=0;
    let pow=1;
    while(num1>0||num2>0||carry>0){
        let id1=num1%10;
        let id2=num2%10;

        num1=Math.floor(num1/10);
        num2=Math.floor(num2/10);
        let add=id1+id2+carry;
        carry=Math.floor(add/base)
        add=add%base;
       
        ans+=add*pow;
        pow=pow*10;
       
    }
    console.log(ans)
    
}
addanyBase(34,34,8)







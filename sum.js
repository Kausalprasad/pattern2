// let object={
//     "Name":"kaushal",
//     "age":"18",
//     "Marks":"34"
// }

//     // for(let i=0;i<Object.keys(details).length;i++){
//     //     console.log(Object.keys(details)[i] +" "+ details[Object.keys(details)[i]])
//     // }

// //    for(let key in object){
// //     console.log(key,object[key])
// //    }

// let number=98;
// let i;
// while(i!=number){
// i=prompt("Enter the number")
// }
// console.log("you are corect")
// let b= document.getElementsByName("div")[0];
// // a.innerHTML=a.innerHTML + '<h1>heelo</h1>';

// let div1=document.createElement("div1");
// div1.innerHTML='<h1>heelo</h1>';
// b.appendChild(div1);


// for(let i=1;i<=10;i++){
//     if(i==4){
//         continue;
//     }
//     if(i==8){
//         break;

//     }
//     console.log(i)

// }

// let i=0;
// let result=1;
// while(i<5){
//     i++;
//     if(i==3){
//         continue;
//     }
//     result=result+i;
// }
// console.log(result)


// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         continue;
//     }
//     if(i>7){
//         break;
//     }
//     console.log(i);
// }

// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         if(j==2){
//             break;
//         }
//         console.log(i,j);
//     }
// }


// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){

//         process.stdout.write("*")
      
//     }
//     console.log(" ");
// }
// let n=10;
// let n=prompt("Enter the number");

// let n=10;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=i+(i-1);k++){
//         process.stdout.write("*")
//     }
//      console.log(" ")
// }

// for(let i=n-1;i>=1;i--){
//     for(let j=n-i;j>=1;j--){
//         process.stdout.write(" ")
//     }
//     for(let k=i+(i-1); k>=1;k--)
//     {
//         process.stdout.write("*")
//     }
//     console.log();
    
// }

// outer:for(let i=1;i<=2;i++){
//     inner:for(let j=1;j<=2;j++){
//         if(j==2){
//             console.log(i,j);
//         continue inner;
//         }
//         console.log(i,j)
//     }
//     console.log(i);

// // }
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write(" ");
//     }
//     for(let k=1;k<=i+(i-1);k++){
//         process.stdout.write("*");
//     }
//     console.log();
    
// }

// let sp=0;
// let st=7;
// for(let i=1;i<=7;i++){
//     for(let j=1;j<=sp;j++){
//         process.stdout.write(" ");
//     }
//     for(let k=1;k<=st;k++){
//         process.stdout.write("*");   
//     }
//     console.log()
//    if(i<4){
//     sp=sp+1;
//     st=st-2;
//    }
//    else{
//     sp=sp-1;
//     st=st+2;
//    }
// }
// } process.out.print(" ") process.out.print(" ")


//  for(let i=1;i<=5;i++){
//     for(let j=1;j<=5-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=i+(i-1);k++){
//         process.stdout.write("*")
//     }
//     console.log()
//  }
// let h = 0;
// for(let i=1;i<=4;i++){
//     let ans='';
// for(let j=0;j<=i-1;j++){
//         h++;
//         // ans+= i+j;
//         ans = ans+h;

//     }

//     console.log(ans)
// }
// }
// for(let i=1;i<=4;i++){
//     let ans='';
    
//     for(let j=1;j<=4-i;j++){
//         process.stdout.write(" ");
//     }
//     for(let k=0;k<=i-1;k++){
       
//         ans+=i+k;

//     }
//     console.log(ans)
// }



// let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// // let n1=0;
// for(let i=1;i<=5;i++){
//     let k=''; 
//     for(let j=1;j<=i;j++){
//         // n1++;
//         k=alpha[i-1]+k;
       
        
//     }
//     console.log(k)
// }

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log()

// }
// let n=10;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log()

// }
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }
// let n=50
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=i+(i-1);k++){
//         process.stdout.write("*")
//     }
//     console.log()
// }

// for(let i=1;i<=n-1;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k=(n-i)*2-1;k>0;k--){
//         process.stdout.write("*")
//     }
//    console.log()
// }
// let sp=4;
// let st=1;
//  for(let i=1;i<=5;i++){
//     for(let j=1;j<=sp;j++){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=st;k++){
//         process.stdout.write("*")
//     }
//     console.log()
    
//     sp=sp-i+(i-1);
//     st=st+2; 
//  }
//  st=9;
//  sp=0;
//  for(let i=1;i<=5;i++){
//     for(let j=1;j<=sp;j++){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=st;k++){
//         process.stdout.write("*")

//     }
//     console.log()
//     st=st-2;
//     sp=sp +i-(i-1);
    
//  }

// for(let i=1;i<=6;i++){

    
//     for(let j=1;j<=6;j++){
//         if(i==1||j==1||j==6||i==6){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
        
        
        
//     }
//     console.log()
// // }

// for(let i=5;i>=1;i--){
//     for(let j=1;j<=5-i;j++){
//         if(j==1){
//             process.stdout.write("*")
//         }
//         else{
//        process.stdout.write(" ")
//         }
        
//     }
//     for(let k=1;k<=i+(i-1);k++){
//         if(k==1||i==5||k==i+(i-1)){
//             process.stdout.write("*") 
//         }
       
//         else{
//         process.stdout.write(" ")
//         }
//         }
//     console.log()
// }

// for(let i=2;i<=5;i++){
//     for(let j=1;j<=5-i;j++){
//         if(j==1){
//             process.stdout.write("*")
//         }
//         else{
//        process.stdout.write(" ")
//         }
//     }
//     for(let k=1;k<=i+(i-1);k++){
//         if(k==1||i==5||k==i+(i-1)){
        
//             process.stdout.write("*") 
//         }
//         else{
//         process.stdout.write(" ")
//         }
//     }
//     console.log()
// }
// // 
// // function star(n){
// //     for(let i=1;i=n;i++){
// //         for(let j=1;j<=n-i;j++){
// //             process.stdout.write("*")
// //         }
// //         console.log()
// //     }
// // }
// // star()


// for(let row=1;row<=7;row++){
//     for(let col=1;col<=7;col++){
//         if(row==1){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write("")
//         }
//         if(row==2)
//             {
//                 if(col==1||col==2||col==6||col==7){
//                     process.stdout.write("*")
//                 }else{
//                     process.stdout.write(" ") 
//                 }
//             }
//          if(row==3){
//             if(col==1||col==3||col==5||col==7){
//                 process.stdout.write("*")
//             }else{
//                 process.stdout.write(" ") 
//             }
//          }  
//          if(row==4){
//             if(col==1||col==4||col==7){
//                 process.stdout.write("*")
//             }else{
//                 process.stdout.write(" ") 
//             }
//          } 
//          if(row==5){
//             if(col==1||col==3||col==5||col==7){
//                 process.stdout.write("*")
//             }else{
//                 process.stdout.write(" ") 
//             }
//          }  
//          if(row==6)
//             {
//                 if(col==1||col==2||col==6||col==7){
//                     process.stdout.write("*")
//                 }else{
//                     process.stdout.write(" ") 
//                 }
//             }
//             if(row==7){
//                 process.stdout.write("*")
//             }else{
//                 process.stdout.write("")
//             }

//     }
//     console.log()
// }
// let n=7;
// for(let row=1;row<=n;row++){
//     for(let col=1;col<=n;col++){
//         if(row==1||row==7){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write("")
//         }
//         if(row==2||row==6)
//             {
//                 if(col==1||col==2||col==6||col==7){
//                     process.stdout.write("*")
//                 }else{
//                     process.stdout.write(" ") 
//                 }
//             }
//          if(row==3||row==5){
//             if(col==1||col==3||col==5||col==7){
//                 process.stdout.write("*")
//             }else{
//                 process.stdout.write(" ") 
//             }
//          }  
//          if(row==4){
//             if(col==1||col==4||col==7){
//                 process.stdout.write("*")
//             }else{
//                 process.stdout.write(" ") 
//             }
//          }     
//     }
//     console.log()
// }


for(let row=1;row<=5;row++){
    for(let col=1;col<=5;col++){
        if(row==1||row==5){
            if(col==1||col==5){
                process.stdout.write("*")
            }
            else{
                process.stdout.write(" ")
            }
        }
            if(row==2||row==4){
             if(col==2||col==4){
                process.stdout.write("*")
             }
             else{
                process.stdout.write(" ")
             }
            }
            if(row==3){
                if(col==3){
                   process.stdout.write("*")
                }
                else{
                   process.stdout.write(" ")
                }
               }
          
        }
        console.log()
}
console.log("hey ");

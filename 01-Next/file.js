const fs= require("fs");
// fs.writeFileSync("./test.txt","hayyyee mazzay ayae hayee mazayyyyyyyyyy");
// fs.writeFile("./test.txt","hayyyee mazzay ayae hayee mazayyy",(err)=>{});
// const result=fs.readFileSync("./test.txt","utf-8");
// console.log(result);
// fs.readFile("./test.txt","utf-8" ,(err,result) =>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// });
// fs.appendFileSync("./test.txt",'hey there' );
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
// fs.cpSync("./test.txt","./copycat.txt");
//fs.unlinkSync("copycat.txt");
console.log(fs.statSync("./test.txt").isFile());
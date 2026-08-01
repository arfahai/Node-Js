const express = require("express");
const app = express();
const fs =require("fs");
const PORT = 8000;
// const users = require("./MOCK_DATA.json");
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/firstdb").then(()=> console.log("Connected")).catch((err)=> console.log("error",err));
const userSchema=new mongoose.Schema({
  firstname:{
    type:String,
    required:true,
  },
  lasttname:{
    type:String,
    
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  jobtitle:{
    type:String,
    
  },
  gender:{
    type:String,
    
  },

},{timestamps:true});
const User=mongoose.model("user",userSchema)
 app.get("/api/users", async (req, res) => {
   const alldbusers=await User.find({})
   res.setHeader("myName","Arfah");
   return res.json(alldbusers);
 });
app.get("/users", async (req, res) => {
  const alldbusers=await User.find({})
   const html = `<ul>
         ${alldbusers.map((users) => `<li>${users.firstname}</li>`).join("")}
     </ul>`;
   res.send(html);
});
// app.get("/users/:id", (req, res) => {
  
  
//   const id = Number(req.params.id);


//   const user = users.find((user) => user.id === id);

//   const html = `
//     <h1>User Details</h1>
//     <p>FName: ${user.first_name}</p>
//     <p>LName: ${user.last_name}</p>
//     <p>Email: ${user.email}</p>
//     <p>Gender: ${user.gender}</p>
//     <p>Job_title: ${user.Job_title}</p>
//   `;

//   res.send(html);
// });
app
  .route("/api/users/:id")
  .get(async(req, res) => {
    const user=await User.findById(req.params.id);
    //const id = Number(req.params.id);
    //const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({error:"userNot Found"});
    return res.json(user);
  })
  .patch(async(req, res) => {
    const user=await User.findByIdAndUpdate(req.params.id);
    return res.json({ status: "success" });
  })
  .delete(async(req, res) => {
    const user=await User.findByIdAndDelete(req.params.id);
    const id = Number(req.params.id);
    return res.json({ status: "Success"});
  });
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
  console.log("Hello from Middleware 1");
  console.log("Method:", req.method);
  console.log("Path:", req.path);
  //return res.end("heyy")
  next();
});
app.post("/api/users",async(req,res)=>{

    const body =req.body;
    if(!body || !body.first_name || !body.email){
      return res.status(400).json({msg:"All fields are req"})
    }
    // users.push({...body, id:users.length+1});
    // fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    //     return res.status(201).json({status:"succes", id:users.length});

    //});
    const result = await User.create({
      firstname: body.first_name,
      email: body.email, 
      lasttname: body.lastst_name,
      jobtitle: body.jobtitle,
      gender: body.gender,
    });
    console.log(result);
    return res.status(201).json({msg:"success"});
});

app.listen(PORT, () => console.log("Server started"));

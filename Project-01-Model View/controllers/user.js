const User=require("../model/user");
async function handleGetAllUsers(req,res){
    const alldbusers=await User.find({});
    res.setHeader("myName","Arfah");
    return res.json(alldbusers);
};
async function handleGetUserById(req,res){
    const user=await User.findById(req.params.id);
    //const id = Number(req.params.id);
    //const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({error:"userNot Found"});
    return res.json(user);
};
async function handleUpdateIdByUser(req,res){
    const user=await User.findByIdAndUpdate(req.params.id);
    return res.json({ status: "success" });
};
async function handleDeleteById(req,res){
    const user=await User.findByIdAndDelete(req.params.id);
    const id = Number(req.params.id);
    return res.json({ status: "Success"});
};
async function handlePostAllUser(req,res){
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
      lastname: body.last_name,
      jobtitle: body.jobtitle,
      gender: body.gender,
    });
    console.log(result);
    return res.status(201).json({msg:"success",id:result._id});
}

module.exports={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateIdByUser,
    handleDeleteById,
    handlePostAllUser,

};
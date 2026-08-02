const express = require("express");
const router=express.Router();
const{handleGetAllUsers,handleGetUserById,handleUpdateIdByUser,handleDeleteById,handlePostAllUser}= require("../controllers/user");
router.get("/", handleGetAllUsers);
// router.get("/users", async (req, res) => {
//   const alldbusers=await User.find({})
//    const html = `<ul>
//          ${alldbusers.map((users) => `<li>${users.firstname}</li>`).join("")}
//      </ul>`;
//    res.send(html);
// });
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
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateIdByUser)
  .delete(handleDeleteById)

router.post("/",handlePostAllUser);
module.exports=router;
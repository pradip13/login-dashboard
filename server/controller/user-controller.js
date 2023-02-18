const User = require("../schema/userSchema.js");

const addUser = async (request,response)=>{
    const user = request.body;
    const newUser = new User(user);

    try {
      await  newUser.save();
      response.status(200).json(newUser);
        
    } catch (error) {
        response.status(404).json({message:error.message})

        
    }

}

const getUsers =async(request,response)=>{
  try {

   const users = await User.find({});
   response.status(200).json(users);

    
  } catch (error) {
    response.status(404).json({message:error.message})
  }
}

const getUser = async (request,response)=>{
  try {

    const user = await User.find({ _id: request.params.id });
    
    response.status(200).json(user);
 
     
   } catch (error) {
     response.status(404).json({message:error.message})
   }

}

const editUser = async (request,response)=>{
  let user = request.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: request.params.id}, editUser);
    response.status(201).json(editUser)
  } catch (error) {
    response.status(404).json({message:error.message})
    
    
  }

}

const deleteUser = async (request,response)=>{
  // let user = request.body;
  // const deleteUser = new User(user);
  try {
    await User.deleteOne({ _id: request.params.id});
    response.status(201).json({message:'user Deleted Successfully'})
  } catch (error) {
    response.status(404).json({message:error.message})
    
    
  }

}

module.exports = {addUser,getUsers,getUser,editUser,deleteUser};
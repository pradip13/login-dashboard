import { FormControl, FormGroup, Input, InputLabel, Typography , styled, Button} from '@mui/material';
import {useState,useEffect } from 'react';
import {editUser, getUser}  from '../services/api';
import {useNavigate,useParams} from "react-router-dom";


const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& div {
  margin-top:20px;
}


`;


const defaultValue ={
  name:"",
  email:"",
  phone:"",
  password:""
}

const EditUser = () => {
  const [user,setUser] = useState(defaultValue);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(()=>{
    const loadUserDetails = async ()=>{
      const response = await getUser(id);
      // console.log(response)
      setUser(response.data);
      console.log((response.data));
    }
    loadUserDetails();

  },[]);

 
  const onValueChange =(e)=>{
    // console.log(e.target.name, e.target.value)
    setUser({...user, [e.target.name] : e.target.value})
    // console.log(user)

  }

  const editUserDetails = async () => {
   await editUser(user, id);
   navigate('/all');

  }
  return (
    <div>

      <Container>
        <Typography variant='h4'>Edit User</Typography>
        <FormControl>
         <InputLabel>Name</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name} />
        </FormControl>
        <FormControl>
         <InputLabel>Email</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email} />
        </FormControl>
        <FormControl>
         <InputLabel>phone</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
         <InputLabel>Password</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
        <Button style={{background:"red"}} onClick={()=> editUserDetails()}>Edit</Button>
        </FormControl>
        
      </Container>
    </div>
  )
}

export default EditUser;

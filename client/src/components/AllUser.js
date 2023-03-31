import React, {useEffect,useState} from 'react';
import { getUsers,deleteUser } from '../services/api';
import {Table,TableHead,TableRow,TableCell,TableBody,Button,styled} from '@mui/material';
import {Link} from "react-router-dom";


const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto;
`
const TRow = styled(TableRow)`
background:#000000;
& > th{
  color:white;
  fontsize:20px;

}
`

const TBody = styled(TableRow)`
& > td {
  font-size:20px;
}
`

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getAllUsers()

  },[])

  const getAllUsers = async ()=>{

   const response = await getUsers();
   setUsers(response.data)
   console.log(response.data);

  }

  const deleteUserDetails = async (id)=>{
   await deleteUser(id);
   getAllUsers();
  }
  return (
     <StyledTable>
        <TableHead>
          <TRow>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>PHONE</TableCell>
            <TableCell>PASSWORD</TableCell>
            <TableCell></TableCell>
          </TRow>

        </TableHead>

        <TableBody>
          {
            users.map(user=>(
              <TBody key={user._id} >
                <TableCell >{user._id}</TableCell>
                <TableCell >{user.name}</TableCell>
                <TableCell >{user.email}</TableCell>
                <TableCell >{user.phone}</TableCell>
                <TableCell >{user.password}</TableCell>
                <TableCell >
                  <Button  style={{marginRight:10, background:"black"}} component={Link} to={`/edit/${user._id}`}>EDIT</Button>
                  <Button style={{background:"black"}} color='secondary' onClick={()=> deleteUserDetails(user._id)}>DELETE</Button>
                </TableCell>
              </TBody>
            ))
          }

        </TableBody>
      </StyledTable>
  
  )
}

export default AllUser;

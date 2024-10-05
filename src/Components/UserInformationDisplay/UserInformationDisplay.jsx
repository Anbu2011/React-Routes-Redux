import './UserInformationDisplay.css'
import { useEffect } from 'react';
import {Link, useParams} from "react-router-dom"
import { useSelector , useDispatch } from "react-redux"
import { getUsers } from '../../slice/userSlice.jsx';
import ErrorRoute from '../ErrorRoute/ErrorRoute.jsx';

const UserInformationDisplay = () => {
  const dispatch = useDispatch();
  const {usersArray, loading} = useSelector((state) => state.usersInfo)

  useEffect(() =>{
    if(usersArray.length === 0){
      dispatch(getUsers())
    }
  },[dispatch,usersArray]);

  const {userId} = useParams();
  const specificUser = usersArray.find((eachUser)=>{
    if(eachUser.id === Number(userId)){
      return eachUser
    }
  })

  if(loading){
    return <p className='loading'>Loading...</p>
  } else if (!specificUser) {
    return <ErrorRoute />; 
  }
  
  return (
    <>
      
      <div className='display-parent'>
        <h1>Details of User {specificUser.id}</h1>
        <div className='display-child'>
            <p><strong>ID : </strong>{specificUser.id}</p>
            <p><strong>Name : </strong>{specificUser.name}</p>
            <p><strong>Email : </strong>{specificUser.email}</p>
            <p><strong>User Name : </strong>{specificUser.username}</p>
            <p><strong>Website : </strong>{specificUser.website}</p>
        </div>
      </div>

      <Link to="/">Home</Link>
    </>
    
  )
}
         
export default UserInformationDisplay
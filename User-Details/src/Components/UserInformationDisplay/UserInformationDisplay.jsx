import './UserInformationDisplay.css'
import {Link, useParams, useNavigate} from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUsers } from '../../slice/userSlice.jsx';
import ErrorRoute from '../ErrorRoute/ErrorRoute.jsx';  

const UserInformationDisplay = () => {
  
  const users = useSelector(selectUsers)
  const {userId} = useParams();
  const navigate = useNavigate();


  const specificUser = users.find((eachUser)=>{
    if(eachUser.id === Number(userId)){
      return eachUser
    }
  })

  if (!specificUser) {
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
            <p><strong>College : </strong>{specificUser.college}</p>
            <p><strong>PassedOut : </strong>{specificUser.passedOut}</p>
        </div>
      </div>

      <Link to="/">Home</Link>
    </>
    
  )
}
         
export default UserInformationDisplay
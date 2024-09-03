import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AllUserDisplay.css'
import { Table, Button } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux"
import { getUsers } from '../../slice/userSlice.jsx';

const AllUserDisplay = () => {
  const dispatch = useDispatch();
  const {usersArray, loading} = useSelector((state) => state.usersInfo)

  const navigate = useNavigate()
  const navigateToUserDetails = (userId) =>{
    navigate(`/user/${userId}`);
  }
  
  useEffect(() => {
    dispatch(getUsers())
  }, []);
  
  return (
    <>
        <div className='parent'>
          <h1>All User Display</h1>
          
          <div className='user-table'>
            <Table striped>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Full Details</th>
                  </tr>
                </thead>
                <tbody>
                    {usersArray.map((eachUser) => (
                      <tr key={eachUser.id}>
                        <td>{eachUser.id}</td>
                        <td>{eachUser.name}</td>
                        <td><Button className='details-button' onClick={() => navigateToUserDetails(eachUser.id)}>Show Details</Button></td>
                      </tr>
                    ))}
                </tbody>
            </Table>
          </div>

        </div>
    </>
      
  )
}

export default AllUserDisplay
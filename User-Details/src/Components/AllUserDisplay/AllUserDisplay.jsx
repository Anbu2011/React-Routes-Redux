import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AllUserDisplay.css'
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { selectUsers } from '../../slice/userSlice.jsx';

const AllUserDisplay = () => {

  const users = useSelector(selectUsers)

  const navigate = useNavigate()
  const navigateToUserDetails = (userId) =>{
    navigate(`/user/${userId}`);
  }
  
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
                    {users.map((eachUser) => (
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
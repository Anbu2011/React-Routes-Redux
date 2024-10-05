import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AllUserDisplay.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowsRotate} from '@fortawesome/free-solid-svg-icons';
import { faSearchengin} from '@fortawesome/free-brands-svg-icons';

import { Table, Button,  Form, FormGroup, Input, Label} from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux"
import { addNewUser, getUsers } from '../../slice/userSlice.jsx';

const AllUserDisplay = () => {
  
  const dispatch = useDispatch();
  const {usersArray, loading} = useSelector((state) => state.usersInfo)

  //Navigate
  const navigate = useNavigate()
  const navigateToUserDetails = (userId) =>{
    navigate(`/user/${userId}`);
  }
  
  //Calling Api
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

  //New User
  const [isFormVisible, SetIsFormVisible] = useState(false)
  const handleAddNewUserClick = () =>{
    SetIsFormVisible(true)
  }

  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    username: '',
    website: ''
  })
  const handleInputChange = (event) =>{
    const {name, value} = event.target
    setFormInput(prevData => ({...prevData, [name]:value}))
  }

  // handle Submit New User
  const handleSubmitNewUser = (event) =>{

    if(!formInput.name || !formInput.email || !formInput.username || !formInput.website){
      alert("All fields are required")
      event.preventDefault()
      return
    }

    const newId = usersArray.length > 0 ? usersArray.length + 1 : 1
    const newUser = {
      ...formInput,
      id: newId,
    }
    dispatch(addNewUser(newUser))

    setFormInput({
      name: '',
      email: '',
      username: '',
      website: ''
    })
  }

  //Form close handle button
  const handleFormCloseButton = () =>{
    SetIsFormVisible(false)
  }

  //Refresh
  const handleRefresh = () =>{
    SetIsFormVisible(false)
    dispatch(getUsers());
  }

  //Search
  const [search, setSearch] = useState('')
  const [foundedUser, setFoundedUser] = useState([])

  const handleSearchChange = (event) =>{
    setSearch(event.target.value)
  }

  useEffect(() => {
    if(search){
      const filteredUsers = usersArray.filter((user) =>(user.name.toLowerCase().includes(search.toLocaleLowerCase())))
      setFoundedUser(filteredUsers)
    }
  }, [search,usersArray]);

  //Loading
  if(loading){
    return <p className='loading'>Loading...</p>
  }

  return (
    <>
      <nav>
        <div className='navBar'>
          <button className='refresh-button details-button' onClick={handleRefresh}>Refresh
            <FontAwesomeIcon className="refresh-icon" icon={faArrowsRotate} />
          </button>
        </div>

        <div className='search-bar'>
            <FontAwesomeIcon icon={faSearchengin} className='search-icon'/>
            <input type="text" className="search-input" onChange={handleSearchChange} placeholder='Search'/>
        </div>
      </nav>
      

      <div className='parent'>
        <h1>All User Display</h1>

        <Button className='details-button' onClick={handleAddNewUserClick}>Add New User</Button>
        
        {isFormVisible && 
          <div className='form-input-parent'>
            <Form>
              <button className='form-close-button' onClick={handleFormCloseButton}>X</button>
              <div className='form-inputs'>
                <FormGroup className='input-label'>
                  <Label for="exampleName">Name</Label>
                  <Input id="exampleName" name="name" value={formInput.name} onChange={handleInputChange} placeholder="Enter Your Name" type="name" />
                </FormGroup>
                <FormGroup className='input-label'>
                  <Label for="exampleEmail">Email</Label>
                  <Input id="exampleEmail" name="email" value={formInput.email} onChange={handleInputChange} placeholder="Enter Your Email" type="email" />
                </FormGroup>
                <FormGroup className='input-label'>
                  <Label for="exampleUserName">User Name</Label>
                  <Input id="exampleUserName" name="username" value={formInput.username} onChange={handleInputChange} placeholder="Enter Your User Name" type="text" />
                </FormGroup>
                <FormGroup className='input-label'>
                  <Label for="exampleWebsite">Website</Label>
                  <Input id="exampleWebsite" name="website" value={formInput.website} onChange={handleInputChange} placeholder="Enter Your Website" type="text" />
                </FormGroup>
              </div>

              <Button className='details-button' onClick={handleSubmitNewUser}>Submit</Button>
            </Form>
          </div>
        }
        
        
        

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
                {(search ? foundedUser : usersArray).length > 0 ?
                  (search ? foundedUser : usersArray).map((eachUser) => (
                    <tr key={eachUser.id}>
                      <td>{eachUser.id}</td>
                      <td>{eachUser.name}</td>
                      <td><Button className='details-button' onClick={() => navigateToUserDetails(eachUser.id)}>Show Details</Button></td>
                    </tr>
                  )) 
                  : 
                  (<tr><td colSpan="3">No Users Found!!</td></tr>)
                }
              </tbody>
          </Table>
        </div>

      </div>
    </>
      
  )
}

export default AllUserDisplay
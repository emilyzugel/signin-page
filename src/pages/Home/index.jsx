import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import api from '../../services/api.js'
import './style.css'

function Home() {

  // Save inputs values with useRef from react
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  // const inputPassword = useRef()

  // Get users data from DB
  const [users, setUsers] = useState([])

  async function getUsers() {
    try {
      const response = await api.get('/users')
      console.log('API Response:', response.data)
      setUsers(response.data.data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }
  //

  // Get users from db on page load
  useEffect(() => {
    getUsers()
  }, [])


  // Create users
  async function createUser() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  //Delete User
  async function deleteUser(id) {
    await api.delete(`/users/${id}`)
    getUsers()
  }

  return (
    <main>
      <div className='register background'>
        <h2>Sign In</h2>
        <form>
          <input ref={inputName} type='text' name='name' placeholder='ex: John Smith' />
          <input ref={inputEmail} type='email' name='email' placeholder='ex: email@email.com' />
          <input ref={inputAge} type='number' name='age' placeholder='ex: 20' />
          <button onClick={createUser} type="button">Register</button>
        </form>
      </div>

      <div className='users background'>
        {users.slice().reverse().map(user => (
          <div className='user-card' key={user.id}>
            <div key={user.id} className='user-content'>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
            <button onClick={() => deleteUser(user._id)} type='button'>
              <FontAwesomeIcon icon={faTrash} style={{ color: "rgb(66, 73,128)" }} />
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home;

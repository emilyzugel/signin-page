import './style.css'

export function Home() {

  return (
    <main>
      <div className='register background'>
        <h2>Sign In</h2>

        <form>
          <input type='text' name='name' placeholder='ex: John Smith' />
          <input type='email' name='email' placeholder='ex: email@email.com' />
          <input type='number' name='age' placeholder='ex: 20' />
          <button type="submit">Register</button>
        </form>
      </div>
      <div className='users background'>
        <div className='user-card'>
          <div className='user-content'>
            <p>Name:</p>
            <p>Email:</p>
          </div>
          <button>
            <i class="fa-solid fa-trash" style="color: #ffffff;"></i>          </button>
        </div>
      </div>
    </main>
  )
}

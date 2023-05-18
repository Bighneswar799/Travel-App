import React from 'react'
import '../components/SignupStyles.css'

const SignUpForm = () => {
  return (
    <div className='main-container'>
      <h1>Sign-Up Here👇🏻</h1>
        <form>
            <input type="text" placeholder='First Name' required />
            <input type="text" placeholder='Last Name' required />
            <input type="email" placeholder='e.g-abcd123@gmail.com' required />
            <input type="number" name="" id="" placeholder='Phone' required />
            <textarea placeholder='Address' rows="4" required></textarea>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default SignUpForm
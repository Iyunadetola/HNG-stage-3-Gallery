import React, {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { useNavigate, Link } from 'react-router-dom'; 


const SignUp = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const auth = getAuth();
    const navigate = useNavigate()



    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
          .then((userCredential) => {
              navigate('/signIn')
            // Signed in 
            const user = userCredential.user;
            // ...
          })
        } catch (error) {
          console.log(error.message)
          setErrorMessage(error.code)
          setTimeout(()=>{
              setErrorMessage('')
          }, 2000)
        }
      };
       

    return (
      <div className='signIn-container' >
        <div className='signIn' >
            <form action="" className='signInForm' >
                <label htmlFor="register-user">Register User</label>
            {errorMessage && <p>{errorMessage}</p>}

                <input type="email" placeholder='Email' required onChange={(e) => { setRegisterEmail(e.target.value) }} />
                <input type='password' placeholder='Password' required onChange={(e) => { setRegisterPassword(e.target.value) }} />
                <button type="submit" onClick={register} >Create User</button>
            </form>
            <Link to ='/signIn'>Click here to sign In</Link>
        </div>
        </div>
    )
}

export default SignUp
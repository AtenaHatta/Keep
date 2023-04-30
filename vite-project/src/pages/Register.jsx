import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { supabase } from '../lib/supabaseClient'

const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const navigate = useNavigate()

  const handleRegister = async () => {
    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert('Passwords do not match')
    }
    
    const { data: { user, error } } = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value
    })

    if (error) {
      toast.error(error.message)
      return
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <input type="email" placeholder="email" ref={emailRef} />
      <input type="password" placeholder="password" ref={passwordRef} />
      <input type="password" placeholder="confirm password" ref={passwordConfirmRef} />
      <button onClick={handleRegister}>Sign up</button>
      <h1>Already have an account?</h1>
      <Link to="/login">Sign in</Link>
    </div>
  )
}

export default Register
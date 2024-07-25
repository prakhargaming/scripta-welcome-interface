import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <div>
      <h1>Please sign in to continue</h1>
      <button onClick={() => signIn('credentials')}>Sign In</button>
    </div>
  )
}
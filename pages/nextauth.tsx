import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  /* !!TODO!! remove following */
  /* eslint @typescript-eslint/no-unused-vars: "off" */
  const [session, loading] = useSession()

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={(e) => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={(e) => signOut()}>Sign out</button>
        </>
      )}
    </>
  )
}

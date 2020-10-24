import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  /* !!TODO!! remove following */
  /* eslint @typescript-eslint/no-unused-vars: "warn" */
  const [session, loading] = useSession()

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={(_event) => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={(_event) => signOut()}>Sign out</button>
        </>
      )}
    </>
  )
}

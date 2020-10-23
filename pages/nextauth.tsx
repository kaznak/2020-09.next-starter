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
          {/** !!TODO!! remove following
           * @ts-ignore */}
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          {/** !!TODO!! remove following
           * @ts-ignore */}
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </>
  )
}

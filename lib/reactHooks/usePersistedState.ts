import { useState, useEffect, Dispatch, SetStateAction } from 'react'

// !TODO!
// Unresolved client side error like following
// > Warning: Text content did not match. Server: "0" Client: "5"
// would SWR resolve this?

function identical(x: any) {
  return x
}

function usePersistedState<T>(
  storageKey: string,
  defaultValue: T,
  reader: (x: string) => T = identical,
  writer: (x: T) => string = identical
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const [state, setState] = useState(
    process.browser
      ? reader(localStorage.getItem(storageKey)) || defaultValue
      : defaultValue
  )
  useEffect(() => {
    if (process.browser) {
      if (state != undefined) {
        localStorage.setItem(storageKey, writer(state))
      } else {
        localStorage.removeItem(storageKey)
      }
    }
  }, [storageKey, state])
  return [state, setState]
}

export default usePersistedState

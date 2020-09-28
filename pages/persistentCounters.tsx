import usePersistedState from '../lib/reactHooks/usePersistedState'

// !!NOTE!!
// the createContainer of unstated-next does not accept storage key.
// Thus I have to code it directory.
// Should I send new code to unstated-next?

function usePersistentCounter(storageKey: string, initialState = 0) {
  const [count, setCount] = usePersistedState<number>(
    storageKey,
    initialState,
    Number,
    String
  )
  return {
    count,
    decrement: () => setCount(count - 1),
    increment: () => setCount(count + 1),
  }
}

function Counter({
  storageKey,
  initialState = 0,
}: {
  storageKey: string
  initialState?: number
}) {
  const counter = usePersistentCounter(storageKey, initialState)
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  )
}

export const Counters = (): JSX.Element => (
  <div className="container">
    <h1>counters1</h1>
    <Counter storageKey={'counter1'} />
    <Counter storageKey={'counter1'} />
    <Counter storageKey={'counter2'} />
    <Counter storageKey={'counter2'} initialState={2} />
  </div>
)
export default Counters

import { useState } from 'react'
import { createContainer } from 'unstated-next'

function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState)
  return {
    count,
    decrement: () => setCount(count - 1),
    increment: () => setCount(count + 1),
  }
}

const CounterContainer = createContainer(useCounter)

export default CounterContainer

import Container from '../lib/stateContainers/counter'

const Provider = Container.Provider

function Display() {
  const counter = Container.useContainer()
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  )
}

function Counter({ initialState }: { initialState?: number }) {
  return (
    <Provider initialState={initialState}>
      <Display />
    </Provider>
  )
}

export default Counter
export { Container, Provider, Display }

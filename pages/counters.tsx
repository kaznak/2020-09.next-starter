import Counter, { Provider, Display } from '../components/counter'

export const Counters = (): JSX.Element => (
  <div className="container">
    <h1>counters1</h1>
    <div>
      <h2>set1</h2>
      <Counter />
      <Counter initialState={2} />
    </div>
    <Provider>
      <h2>set2</h2>
      <Display />
      <Display />
      <Provider initialState={2}>
        <h2>set3</h2>
        <Display />
        <Display />
      </Provider>
    </Provider>
  </div>
)
export default Counters

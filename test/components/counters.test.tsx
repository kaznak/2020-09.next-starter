import React from 'react'
import { render, fireEvent, getNodeText } from '../testUtils'
import Counter, { Provider, Display } from '../../components/counter'

const testEnv = () => {
  const elm = render(
    <Provider>
      <Display />
      <Display />
      <Provider initialState={2}>
        <Display />
        <Display />
      </Provider>
    </Provider>
  )

  return {
    elm,
    counters: elm.container.querySelectorAll('span'),
    incrementButtons: elm.getAllByText('+'),
    decrementButtons: elm.getAllByText('-'),
  }
}

describe('Counter component', () => {
  it('construct', () => {
    const elm = render(<Counter />)
    expect(elm.asFragment()).toMatchSnapshot()
  })
  it('construct with initialState', () => {
    const elm = render(<Counter initialState={2} />)
    expect(elm.asFragment()).toMatchSnapshot()
    expect(getNodeText(elm.container.querySelector('span'))).toBe('2')
  })
  it('construct with Provider', () => {
    const env = testEnv()

    expect(env.elm.asFragment()).toMatchSnapshot()
    expect(getNodeText(env.counters[0])).toBe('0')
    expect(getNodeText(env.counters[1])).toBe('0')
    expect(getNodeText(env.counters[2])).toBe('2')
    expect(getNodeText(env.counters[3])).toBe('2')
  })

  it('clicking outer increment buttons', () => {
    const env = testEnv()

    expect(getNodeText(env.counters[0])).toBe('0')
    expect(getNodeText(env.counters[1])).toBe('0')
    expect(getNodeText(env.counters[2])).toBe('2')
    expect(getNodeText(env.counters[3])).toBe('2')
    fireEvent.click(env.incrementButtons[0])
    expect(getNodeText(env.counters[0])).toBe('1')
    expect(getNodeText(env.counters[1])).toBe('1')
    expect(getNodeText(env.counters[2])).toBe('2')
    expect(getNodeText(env.counters[3])).toBe('2')
    fireEvent.click(env.incrementButtons[1])
    expect(getNodeText(env.counters[0])).toBe('2')
    expect(getNodeText(env.counters[1])).toBe('2')
    expect(getNodeText(env.counters[2])).toBe('2')
    expect(getNodeText(env.counters[3])).toBe('2')
  })
  it('clicking outer decrement buttons', () => {
    const env = testEnv()

    expect(getNodeText(env.counters[0])).toBe('0')
    expect(getNodeText(env.counters[1])).toBe('0')
    expect(getNodeText(env.counters[2])).toBe('2')
    expect(getNodeText(env.counters[3])).toBe('2')
    fireEvent.click(env.decrementButtons[0])
    expect(getNodeText(env.counters[0])).toBe('-1')
    expect(getNodeText(env.counters[1])).toBe('-1')
    expect(getNodeText(env.counters[2])).toBe('2')
    expect(getNodeText(env.counters[3])).toBe('2')
    fireEvent.click(env.decrementButtons[1])
    expect(getNodeText(env.counters[0])).toBe('-2')
    expect(getNodeText(env.counters[1])).toBe('-2')
    expect(getNodeText(env.counters[2])).toBe('2')
    expect(getNodeText(env.counters[3])).toBe('2')
  })

  it('clicking inner increment buttons', () => {
    const env = testEnv()

    expect(getNodeText(env.counters[0])).toBe('0')
    expect(getNodeText(env.counters[1])).toBe('0')
    expect(getNodeText(env.counters[2])).toBe('2')
    expect(getNodeText(env.counters[3])).toBe('2')
    fireEvent.click(env.incrementButtons[2])
    expect(getNodeText(env.counters[0])).toBe('0')
    expect(getNodeText(env.counters[1])).toBe('0')
    expect(getNodeText(env.counters[2])).toBe('3')
    expect(getNodeText(env.counters[3])).toBe('3')
    fireEvent.click(env.incrementButtons[3])
    expect(getNodeText(env.counters[0])).toBe('0')
    expect(getNodeText(env.counters[1])).toBe('0')
    expect(getNodeText(env.counters[2])).toBe('4')
    expect(getNodeText(env.counters[3])).toBe('4')
  })
  it('clicking inner decrement buttons', () => {
    const env = testEnv()

    expect(getNodeText(env.counters[0])).toBe('0')
    expect(getNodeText(env.counters[1])).toBe('0')
    expect(getNodeText(env.counters[2])).toBe('2')
    expect(getNodeText(env.counters[3])).toBe('2')
    fireEvent.click(env.decrementButtons[2])
    expect(getNodeText(env.counters[0])).toBe('0')
    expect(getNodeText(env.counters[1])).toBe('0')
    expect(getNodeText(env.counters[2])).toBe('1')
    expect(getNodeText(env.counters[3])).toBe('1')
    fireEvent.click(env.decrementButtons[3])
    expect(getNodeText(env.counters[0])).toBe('0')
    expect(getNodeText(env.counters[1])).toBe('0')
    expect(getNodeText(env.counters[2])).toBe('0')
    expect(getNodeText(env.counters[3])).toBe('0')
  })
})

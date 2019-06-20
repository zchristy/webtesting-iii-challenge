import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Display from './Display';

describe('<Display />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without errors', () => {
    const queries = render(<Display />)
  })

  describe('is the Gate closed-unlocked, closed-locked, open-unlocked, open-locked', () => {
    it('should be closed and unlocked', () => {
      const { getByText } = render(<Display locked={false} closed={true} />)

      const closedGate = /closed/i
      const unlockedGate = /unlocked/i

      expect(getByText(closedGate).textContent).toBe('Closed')
      expect(getByText(unlockedGate).textContent).toBe('Unlocked')
    })

    it('should be closed and locked', () => {
      const { getByText } = render(<Display locked={true} closed={true} />)

      const closedGate = /closed/i
      const lockedGate = /locked/i

      expect(getByText(closedGate).textContent).toBe('Closed')
      expect(getByText(lockedGate).textContent).toBe('Locked')
    })
  })

  it('should be open and unlocked', () => {
    const { getByText } = render(<Display locked={false} closed={false} />)

    const openGate = /open/i
    const unlockedGate = /unlocked/i

    expect(getByText(openGate).textContent).toBe('Open')
    expect(getByText(unlockedGate).textContent).toBe('Unlocked')
  })

  it('should be open and locked', () => {
    const { getByText } = render(<Display locked={true} closed={false} />)

    const openGate = /open/i
    const lockedGate = /locked/i

    expect(getByText(openGate).textContent).toBe('Open')
    expect(getByText(lockedGate).textContent).toBe('Locked')
  })

  describe('is the red-led light displayed when closed or locked', () => {
    it('should be closed with red-led classname', () => {
      const { getByText } = render(<Display locked={false} closed={true} />)

      const closedGate = /closed/i
      const redLed = 'led red-led'

      expect(getByText(closedGate).getAttribute('class')).toBe(redLed)
    })

    it('should be locked with red-led classname', () => {
      const { getByText } = render(<Display locked={true} closed={true} />)

      const lockedGate = /locked/i
      const redLed = 'led red-led'

      expect(getByText(lockedGate).getAttribute('class')).toBe(redLed)
    })

  })

  describe('is the green-led light displayed when open or unlocked', () => {
    it('should be closed with red-led classname', () => {
      const { getByText } = render(<Display locked={false} closed={false} />)

      const openGate = /open/i
      const greenLed = 'led green-led'

      expect(getByText(openGate).getAttribute('class')).toBe(greenLed)
    })

    it('should be locked with red-led classname', () => {
      const { getByText } = render(<Display locked={false} closed={true} />)

      const unlockedGate = /locked/i
      const greenLed = 'led green-led'

      expect(getByText(unlockedGate).getAttribute('class')).toBe(greenLed)
    })

  })

})

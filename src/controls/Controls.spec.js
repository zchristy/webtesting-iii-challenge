import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Controls from './Controls';

describe('<Controls />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Controls />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without errors', () => {
    const queries = render(<Controls />)
  })

  describe('Button for opening and closing gate', () => {

    it('shows when the button is clicked the gate is open', () => {
      const { getByText } = render(<Controls locked={false} closed={true} />)

      const button = getByText(/open gate/i)
      fireEvent.click(button)

      expect(getByText('Open Gate'))
    })

    it('shows when the button is clicked the gate is closed', () => {
      const { getByText } = render(<Controls locked={false} closed={false} />)

      const button = getByText(/close gate/i)
      fireEvent.click(button)

      expect(getByText('Close Gate'))
    })

  })

  describe('Button for locking and unlocking gate', () => {

    it('shows when the button is clicked the gate is locked', () => {
      const { getByText } = render(<Controls locked={true} closed={true} />)

      const button = getByText(/unlock gate/i)
      fireEvent.click(button)

      expect(getByText('Unlock Gate'))
    })

    it('shows when the button is clicked the gate is unlocked', () => {
      const { getByText } = render(<Controls locked={false} closed={false} />)

      const button = getByText(/lock gate/i)
      fireEvent.click(button)

      expect(getByText('Lock Gate'))
    })

  })

})

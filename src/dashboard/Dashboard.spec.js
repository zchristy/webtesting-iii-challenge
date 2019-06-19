import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without errors', () => {
    const queries = render(<Dashboard />)
  })

})

import { screen, render } from '@testing-library/react'
import { App } from './App'

describe('Given the App component', () => {
  it('should render the hello world text', () => {
    render(<App />)
    expect(screen.getByText('Hello world!')).toBeVisible()
  })
})

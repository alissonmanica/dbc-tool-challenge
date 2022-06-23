import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event/dist/types/setup'
import ToolList from './ToolList'

describe('should test the behavior of the list', () => {
  it('should start the list without size', () => {
    const number = 5
    expect(number).toBe(5)
    // screen.debug(list as any)
  })
})

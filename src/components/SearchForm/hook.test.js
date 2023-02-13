import { renderHook, act } from '@testing-library/react'
import useForm from './hook'

const setup = (params) => {
  const { result } = renderHook(() => useForm(params))
  return result
}

test('should change the keyword', () => {
  const result = setup()

  act(() => {
    result.current.updateKeyword('batman')
  })

  expect(result.current.keyword).toBe('batman')
})

test('should use the initial values', () => {
  const result = setup({ initialKeyword: 'avengers' })

  expect(result.current.keyword).toBe('avengers')
  expect(result.current.rating).toBe('g')
})

test('should count correctly how many times update keyword', () => {
  const result = setup()

  act(() => {
    result.current.updateKeyword('b')
    result.current.updateKeyword('ba')
  })

  expect(result.current.keyword).toBe('ba')
  expect(result.current.times).toBe(2)
})
import { setActivePinia, createPinia } from 'pinia'
import { describe, it, beforeEach, expect } from 'vitest'
import { useCounterStore } from '@/stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const s = useCounterStore()
    s.increment()
    expect(s.count).toBe(1)
  })

  it('decrements', () => {
    const s = useCounterStore()
    s.decrement()
    expect(s.count).toBe(-1)
  })
})

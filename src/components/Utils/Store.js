import { writable } from 'svelte/store'
import { v4 } from 'uuid'

export const count = writable([
  {
    id: v4(),
    text: 'Meet John',
    done: false
  },
  {
    id: v4(),
    text: 'Call Smith',
    done: true
  }
])
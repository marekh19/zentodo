import { type StateStorage } from 'zustand/middleware'

import { getItem, removeItem, setItem } from './idb'

export const storage: StateStorage = {
  getItem: async (id: string): Promise<string | null> => {
    const value = await getItem(id)
    return value ? JSON.stringify(value) : null
  },
  setItem: async (id: string, value: string): Promise<void> => {
    const parsedValue = JSON.parse(value)
    await setItem(id, parsedValue)
  },
  removeItem: async (id: string): Promise<void> => {
    await removeItem(id)
  },
}

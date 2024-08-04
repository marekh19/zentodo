import { openDB } from 'idb'

const DB_NAME = 'zentodo-db'
const STORE_NAME = 'todo-store'
const DB_VERSION = 1

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(STORE_NAME)
  },
})

export const setItem = async (key: string, value: unknown) => {
  const db = await dbPromise
  await db.put(STORE_NAME, value, key)
}

export const getItem = async (key: string) => {
  const db = await dbPromise
  return db.get(STORE_NAME, key)
}

export const removeItem = async (key: string) => {
  const db = await dbPromise
  await db.delete(STORE_NAME, key)
}

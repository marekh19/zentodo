import { useEffect } from 'react'

import { useTodos } from './useTodos'

const HAS_SEEN_NOTIFICATION_KEY = 'has-seen-notification'

const getHasSeenNotification = () =>
  sessionStorage.getItem(HAS_SEEN_NOTIFICATION_KEY)

const setHasSeenNotification = () => {
  sessionStorage.setItem(HAS_SEEN_NOTIFICATION_KEY, 'true')
}

export const useNotification = () => {
  const { getFilteredTodos } = useTodos()

  const numOfNotCompletedTodos = getFilteredTodos('todo').length

  useEffect(() => {
    const sendNotification = async () => {
      const perm = await Notification.requestPermission()
      if (
        perm === 'granted' &&
        !!numOfNotCompletedTodos &&
        !getHasSeenNotification()
      ) {
        const notification = new Notification(
          'You have todos to complete! 📝',
          {
            body: `${numOfNotCompletedTodos} todos are waiting for you!`,
          }
        )
        notification.addEventListener('show', setHasSeenNotification)
      }
    }
    sendNotification()
  }, [numOfNotCompletedTodos])
}

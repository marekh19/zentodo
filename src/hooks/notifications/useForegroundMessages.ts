import { useEffect } from 'react'
import { notifications } from '@mantine/notifications'
import { onMessage, type MessagePayload } from 'firebase/messaging'

import { messaging } from '@/lib/firebase'

export const useForegroundMessages = () => {
  useEffect(() => {
    const handleMessage = (payload: MessagePayload) => {
      if (payload.notification) {
        const { title, body } = payload.notification
        notifications.show({
          title,
          message: body,
        })
      }
    }

    const unsubscribe = onMessage(messaging, handleMessage)

    return () => unsubscribe()
  }, [])
}

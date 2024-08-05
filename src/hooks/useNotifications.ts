import { useEffect } from 'react'

import { getToken, messaging } from '@/lib/firebase'

const vapidKey = import.meta.env.VITE_FCM_VAPID_KEY

export const useNotifications = () => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          const token = await getToken(messaging, { vapidKey })
          console.log({ FCMToken: token })
        }
      } catch (error) {
        console.error('Permission denied', error)
      }
    }

    requestPermission()
  }, [])
}

import { useEffect } from 'react'

import { getToken, messaging } from '@/lib/firebase'

const vapidKey = import.meta.env.VITE_FCM_VAPID_KEY

export const useNotificationsPermAndToken = () => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          await getToken(messaging, { vapidKey })
        }
      } catch (error) {
        console.error('Permission denied', error)
      }
    }

    requestPermission()
  }, [])
}

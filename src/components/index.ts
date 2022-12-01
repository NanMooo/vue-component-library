import type { App, Plugin } from 'vue'
import { default as Button } from './button/NButton.vue'
import { default as Notification } from './noticifation/NNotification.vue'
import { default as Notificationcopy } from './noticifationcopy/NNotificationcopy.vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T extends Record<string, any>>(component: T) => {
  const comp = component as SFCWithInstall<T>
  comp.install = (app: App): void => {
    app.component(comp.name, comp)
  }

  return comp
}

export const NButton = withInstall(Button)

export const NNotification = withInstall(Notification)

export const NNotificationcopy = withInstall(Notificationcopy)

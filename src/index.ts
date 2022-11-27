import type { App } from 'vue'
import * as components from './components/index'
import { forEach } from 'lodash-es'

export const demoInstall = {
  install: (app: App) => {
    forEach(components, (component) => {
      app.component(component.name, component)
    })
  },
}

export { components }

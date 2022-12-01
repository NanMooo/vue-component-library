import type { App } from 'vue'
import * as components from './components/index'
export * from './components/index'
import { name, version } from '../package.json'
import { forEach } from 'lodash-es'

const install = (app: App) => {
  forEach(components, (component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
  name,
  version,
}

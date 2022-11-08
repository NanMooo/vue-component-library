import { defaultTheme } from 'vuepress'

export default {
  base: '/vue-component-library',
  theme: defaultTheme({
    sidebar: [
      '../README.md',
      '../components/input-text.md',
      '../components/input-textarea.md',
    ],
  }),
}

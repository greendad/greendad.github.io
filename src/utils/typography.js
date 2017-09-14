import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.headerColor = '#FF5733';
Wordpress2016.overrideThemeStyles = () => ({
  'a': {
    color: '#FF5733'
  },
  'blockquote': {
    'border-left': '0.32813rem solid hsla(11,80%,60%,0.9)'
  }
})

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

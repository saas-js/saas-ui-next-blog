import { extendTheme } from '@chakra-ui/react'

import { theme } from '@saas-ui/react'

import { createPalette } from '@saas-ui/react'

const colors = createPalette('#8a5cf6', {
  blackLuminance: 0.005,
  colors: {
    gray: '#111827',
  },
})

export default extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    colors,
  },
  theme
)

import { Box, BoxProps } from '@chakra-ui/react'
import { Navbar } from 'components/Navbar'

export const Layout: React.FC<BoxProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Box {...rest}>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  )
}

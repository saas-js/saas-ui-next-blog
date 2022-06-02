import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from '../Logo'

export const Navbar: React.FC<BoxProps> = (props) => {
  const { children, ...rest } = props
  const isMobile = useBreakpointValue({ base: true, lg: false })
  return (
    <Box as="section" pb={{ base: '12', md: '24' }} {...rest}>
      <Box as="nav">
        <Container py={{ base: '4', lg: '5' }} maxW="container.xl">
          <HStack spacing="10" justify="space-between">
            <Logo />
            {!isMobile ? (
              <Flex justify="space-between" flex="1">
                {children}
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

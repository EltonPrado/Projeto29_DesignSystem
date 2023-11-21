import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite_ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

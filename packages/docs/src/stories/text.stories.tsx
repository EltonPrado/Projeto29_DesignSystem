import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite_ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquid magnam recusandae corrupti! Nam, tenetur libero atque adipisci laudantium tempora non nihil quia alias illum? Maxime quaerat neque inventore ipsam.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

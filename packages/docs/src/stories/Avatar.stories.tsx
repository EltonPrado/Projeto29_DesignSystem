import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite_ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/eltonprado.png',
    alt: 'Elton Prado',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

import type { Meta, StoryObj } from '@storybook/react';

import Button  from './Button';
import { string } from 'prop-types';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
  args: {
    label: "Click"
  },
};
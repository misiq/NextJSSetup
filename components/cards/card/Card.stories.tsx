import { Meta, StoryFn } from '@storybook/react';
import Card, { CardProps } from './Card';
import { mockCardProps } from './Card.mocks';

export default {
  title: 'templates/Card',
  argTypes: {},
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockCardProps.base,
} as CardProps;

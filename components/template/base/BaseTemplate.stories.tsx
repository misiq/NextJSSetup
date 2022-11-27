import { Meta, StoryFn } from '@storybook/react';
import BaseTemplate, { BaseTemplateProps } from './BaseTemplate';
import { mockTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'templates/BaseTemplate',
  argTypes: {},
} as Meta<typeof BaseTemplate>;

const Template: StoryFn<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockTemplateProps.base,
} as BaseTemplateProps;

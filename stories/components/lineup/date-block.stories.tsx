import DateBlock from '@components/lineup/date-selector/date-block';
import { type Meta, type StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

const meta: Meta<typeof DateBlock> = {
  title: 'COMPONENTS/Lineup/DateBlock',
  component: DateBlock,
  argTypes: {},
  parameters: {},
  tags: ['autoDocs'],
};

export default meta;
type Story = StoryObj<typeof DateBlock>;

export const Default: Story = {
  args: {
    date: dayjs('2024-05-21'),
  },
};

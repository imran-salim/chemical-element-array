import type { Meta, StoryObj } from '@storybook/react';

import { PeriodicTable } from './PeriodicTable';

const meta = {
  title: 'PeriodicTable',
  component: PeriodicTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PeriodicTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

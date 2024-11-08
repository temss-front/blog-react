import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        children: { control: 'text' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

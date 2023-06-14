import type { Meta, StoryObj } from '@storybook/react'
import Button from './button'

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const PrimaryContained: Story = {
    args: {
        color: 'primary',
        variant: 'contained',
    },
};

export const SecondaryContained: Story = {
    args: {
        color: 'secondary',
        variant: 'contained',
    },
};

export const SmallNoOutlined: Story = {
    args: {
        size: 'small',
        variant: 'text',
    },
};

export const MediumOutlined: Story = {
    args: {
        size: 'medium',
        variant: 'outlined',
    },
};

export const LargeSuccessContained: Story = {
    args: {
        size: 'large',
        variant: 'contained',
        color: 'success',
    },
};
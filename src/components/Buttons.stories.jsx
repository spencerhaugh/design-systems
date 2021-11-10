import React from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Buttons.js";
import { action } from '@storybook/addon-actions'

export default {
    title: "Example/Buttons",
    component: 'TheButtons',
    argTypes: {
      disabled: {
        control: { type: 'boolean' },
        defaultValue: false
      }
    }
};

const primaryTemplate = (args) => <PrimaryButton {...args} onClick={action('button-click')}>
  {args.label}</PrimaryButton>;

const secondaryTemplate = (args) => <SecondaryButton {...args} onClick={action('button-click')}>
  {args.label}</SecondaryButton>;

const tertiaryTemplate = (args) => <TertiaryButton {...args} onClick={action('button-click')}>
  {args.label}</TertiaryButton>;

export const Primary = primaryTemplate.bind({});
Primary.args = {
  label: "Primary Button"
};

export const Secondary = secondaryTemplate.bind({});
Secondary.args = {
  label: "Secondary Button"
};

export const Tertiary = tertiaryTemplate.bind({});
Tertiary.args = {
  label: "Tertiary Button"
};

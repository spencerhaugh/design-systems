import React from "react";
import { SignUpModal } from "./Modals";
import { action } from '@storybook/addon-actions';

export default {
    title: "Component/SignUpModal",
    component: SignUpModal,
};

const Template = (args) => <SignUpModal {...args} onClick={action('button-click')} setShowModal={() => console.log("Close modal")} />;

export const Modal = Template.bind({});
Modal.args = {
    showModal: true,
};
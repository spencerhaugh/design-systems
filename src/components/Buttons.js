import styled from 'styled-components';
import { typeScale } from '../utils';

import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.h5};
        padding: 16px 24px;
    `,
    warning: ({ props }) => `
        background: none;
        &:hover, &:focus {
            background-color: ${props.theme.status.warningColorHover};
            outline: 3px solid ${props.theme.status.warningColorHover};
            outline-offset: 2px;
            border: 2px solid transparent;
        }

        &:active {
            background-color: ${props.theme.status.warningColorActive};
        }
    `,
    primaryButtonWarning: ({ props }) => `
        background-color: ${props.theme.status.warningColor};
        color: ${props.theme.textColorInverted};
    `,
    secondaryButtonWarning: ({ props }) => `
        border: 2px solid ${props.theme.status.warningColor};
        color: ${props.theme.status.warningColor};

        &:hover, &:focus {
            color: ${props.theme.textColorInverted}
        }
    `,
    tertiaryButtonWarning: ({ props }) => `
        color: ${props.theme.status.warningColor};

        &:hover, &:focus {
            color: ${props.theme.textColorInverted};
    }
    `,
    error: ({ props }) => `
        background: none;

        &:hover {
            background-color: ${props.theme.status.errorColorHover};
            border: 2px solid transparent;
        }
        &:active, &:focus {
            background-color: ${props.theme.status.errorColorActive};
            outline: 3px solid ${props.theme.status.errorColorHover};
            outline-offset: 2px;
        }
    `,
    primaryButtonError: ({ props }) => `
        background-color: ${props.theme.status.errorColor};
        color: ${props.theme.textColorInverted};
    `,
    secondaryButtonError: ({ props }) => `
        border: 2px solid ${props.theme.status.errorColor};

        &:hover, &:focus {
            color: ${props.theme.textColorInverted};
        }
    `,
    tertiaryButtonError: ({ props }) => `
        color: ${props.theme.status.errorColor};

        &:hover, &:focus {
            color: ${props.theme.textColorInverted};
        }
    `,
    success: ({ props }) => `
    background: none;

    &:hover {
        background-color: ${props.theme.status.successColorHover};
        border: 2px solid transparent;
    }
    &:active, &:focus {
        background-color: ${props.theme.status.successColorActive};
        outline: 3px solid ${props.theme.status.successColorHover};
        outline-offset: 2px;
    }
`,
    primaryButtonSuccess: ({ props }) => `
        background-color: ${props.theme.status.successColor};
        color: ${props.theme.textColorInverted};
`,
    secondaryButtonSuccess: ({ props }) => `
        border: 2px solid ${props.theme.status.successColor};

        &:hover, &:focus {
            color: ${props.theme.textColorInverted};
        }
`,
    tertiaryButtonSuccess: ({ props }) => `
        color: ${props.theme.status.successColor};
        &:hover, &:focus {
            color: ${props.theme.textColorInverted};
        }
`
}

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
border-radius: 2px;
min-width: 100px;
cursor: pointer;
font-family: 'Roboto Mono', monospace;
transition: background-color .2s linear, color .2s linear;

    &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary}
}

    &:focus {
    outline: 3px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
}

    &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    border-color ${props => props.theme.primaryActiveColor};
    color: ${props => props.theme.textColorOnPrimary};
}
`;

export const PrimaryButton = styled(Button)`
background-color: ${props => props.theme.primaryColor};
border: none;
color: ${props => props.theme.textColorOnPrimary};

    &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
}

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
background: none;
border: 2px solid ${props => props.theme.primaryColor};
color: ${props => props.theme.primaryColor};

    &:disabled {
    background: none;
    color: ${props => props.theme.disabled};
    border-color: ${props => props.theme.disabled};
    cursor: not-allowed;
}

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
background: none;
border: none;
color: ${props => props.theme.primaryColor};

    &:disabled {
    background: none;
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
}

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

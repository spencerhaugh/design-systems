import React from 'react';
import styled from 'styled-components';

const CloseIconWrapper = styled.svg`
    width: 100%;
    height: 100%;
`;

export const CloseIcon = () => (
    <CloseIconWrapper aria-hidden='true'>
        <path d="M17.41,16l6.29-6.29a1,1,0,0,0-1.41-1.41L16,14.59,9.71,8.29A1,1,0,0,0,8.29,9.71L14.59,16,8.29,22.29a1,1,0,1,0,1.41,1.41L16,17.41l6.29,6.29a1,1,0,0,0,1.41-1.41Z" />
    </CloseIconWrapper>
);


import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme, primary }) => css`
    cursor: pointer;
    background: transparent;
    border-radius: 3px;
    border: 2px solid ${theme.colorMappings.primary};
    color: ${theme.colorMappings.primary};
    margin: 0 1em;
    padding: 0.25em 1em;

    ${primary &&
    css`
      background: ${theme.colorMappings.primary};
      color: ${theme.colorMappings.white};
    `};
  `}
`;

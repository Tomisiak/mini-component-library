import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--iconSize': '14px',
    '--iconLeft': '2px',
    '--iconBottom': '2px',
    '--fontSize': '0.875rem',
    '--borderWidth': '1px',
    '--padding': '4px 4px 4px calc(4px + var(--iconSize) + 10px)',
  },
  large: {
    '--iconSize': '20px',
    '--iconLeft': '3px',
    '--iconBottom': '2px',
    '--fontSize': '1.125rem',
    '--borderWidth': '2px',
    '--padding': '8px 8px 8px calc(3px + var(--iconSize) + 15px)'
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];
  if (!styles) {
    throw Error(`Unknown size passed to IconInput: ${size}`);
  }

  return <Wrapper style={styles}>
    <VisuallyHidden><label>{label}</label></VisuallyHidden>
    <Input placeholder={placeholder} style={{ '--width': width + 'px' }}  />
    <InputIcon id={icon} size={styles['--iconSize']} strokeWidth={2} />
    </Wrapper>;
};

const Wrapper = styled.span`
  position: relative;
`;

const Input = styled.input`
  border: 0;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  padding: var(--padding);
  width: var(--width);
  
  color: ${COLORS.gray500};
  font-size: var(--fontSize);
  line-height: 1.172;
  font-weight: 700;
  
  &:hover {
    color: ${COLORS.black};
  }
  
  &:focus {
    outline-offset: 2px;
  }
  
  &::placeholder {
    font-weight: 400;
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  left: var(--iconLeft);
  bottom: var(--iconBottom);
  pointer-events: none;
  color: ${COLORS.gray500};
  
  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;

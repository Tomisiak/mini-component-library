import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Wrapper>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <Outline />
        {displayedValue}
        <SelectIcon id={'chevron-down'} strokeWidth={2} size={20} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  padding: 12px 52px 12px 16px;
  width: max-content;
  max-width: 100%;
  
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  line-height: 1.125;
  color: ${COLORS.gray700};
  
  &:hover {
   color: ${COLORS.black}; 
  }
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none;
`;

const Outline = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export default Select;

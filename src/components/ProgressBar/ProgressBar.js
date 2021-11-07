/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  large: {
    '--innerPadding': '4px',
    '--height': '16px',
    '--radius': '8px',
  },
  medium: {
    '--innerPadding': '0',
    '--height': '12px',
    '--radius': '4px',
  },
  small: {
    '--innerPadding': '0',
    '--height': '8px',
    '--radius': '4px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  const valueVariable = 100 - Math.min(value, 100);

  return <Wrapper
    style={{ ...styles, '--value': valueVariable }}
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <ProgressMask>
      <ProgressIndicator>
      </ProgressIndicator>
    </ProgressMask>
  </Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--innerPadding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressMask = styled.div`
  position: relative;
  border-radius: 4px;
  height: var(--height);
  overflow: hidden;
`;

const ProgressIndicator = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.primary};
  transform: translateX(calc(-1% * var(--value)));
  transition: transform 200ms ease-in;
`;

export default ProgressBar;

import React from 'react';

import {
  ProgressContainer,
  ProgressTitle,
  Progress,
  ProgressText,
  ProgressValue,
} from './style';

function ProgressBar({ title, width, text }) {
  const num = width + '%';
  return (
    <ProgressContainer>
      <ProgressTitle>{title}</ProgressTitle>
      <Progress>
        <span style={{ width: num }}></span>
      </Progress>
      <ProgressText>
        <span style={{ width: num }}></span>
      </ProgressText>
      <ProgressValue>
        <span>{text}</span>
      </ProgressValue>
    </ProgressContainer>
  );
}
export default ProgressBar;

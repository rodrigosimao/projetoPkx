import styled from 'styled-components';

export const ProgressContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  margin-left: 0;
  color: ${({ theme }) => theme.fontColor.id};
  opacity: 0.9;
  font-size: 13px;
`;

export const ProgressTitle = styled.h3`
  font-size: 13px;
  width: 1700px;
  position: relative;
  opacity: 1;
  margin: 0px;
  height: auto;
`;

export const Progress = styled.div`
  position: relative;
  width: 3500px;
  border-color: black;
  border-style: solid;
  border-width: 4px;
  margin: 6px 5px 5px 5px;
  height: 0.4rem;

  span {
    position: absolute;
    left: -3px;
    bottom: -3px;
    height: 100%;
    max-width: 100%;
    height: 0.4rem;
    background: green;
  }
`;

export const ProgressText = styled.div``;

export const ProgressValue = styled.div``;

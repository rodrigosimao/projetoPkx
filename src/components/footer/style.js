import styled from 'styled-components';

export const FooterStyle = styled.header`
  background-color: ${({ theme }) => theme.theme.primary};
`;
export const ContainerStyle = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-top: 60px;
  padding: 5px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.theme.secondary};
  font-size: 16px;
  font-family: 'Flexo';
`;

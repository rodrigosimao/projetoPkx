import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.theme.primary};
`;
export const ContainerStyle = styled.div`
  max-width: 1015px;
  margin: 0 auto;
  padding: 5px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyle = styled.div`
  margin: 0px 30px;
`;

export const MenuListStyle = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  li a {
    font-family: 'Flexo';
    font-size: 1.25em;
    letter-spacing: -1px;
    display: block;
    padding: 20px;
    font-weight: 900;
    color: ${({ theme }) => theme.theme.secondary};
  }

  li a:visited {
    color: ${({ theme }) => theme.theme.secondary};
  }

  li img {
    padding: 0px;
    align-items: center;
  }
`;

export const LogoIconStyle = styled.div`
  margin: 0px 30px;
`;

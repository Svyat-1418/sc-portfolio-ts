import styled from 'styled-components'

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  // /*background-color: ${({ theme }) => theme.colors.bgColor};
  width: 30rem;
  border-right: ${({ theme }) => theme.borders.headerBorderRight};
  height: 100%;
  padding: 2rem;
  text-align: center;

  a {
    display: block;
    margin: 1.5rem 0;
    padding: 0.7rem;
    border-radius: 5rem;
    font-size: 2rem;
    box-shadow: ${({ theme }) => theme.boxShadows.boxShadow};
    color: ${({ theme }) => theme.colors.textColor};

    &:hover {
      box-shadow: ${({ theme }) => theme.boxShadows.boxShadowInset};
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`

export default {
  HeaderStyled,
}

import S from './Header.styled.tsx'

export const Header = () => {
  return (
    <S.HeaderStyled>
      <nav>
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contacts">contacts</a>
          </li>
        </ul>
      </nav>

      <div>
        <ul>
          <li>
            <a href="#">github icon</a>
          </li>
          <li>
            <a href="#">instagram icon</a>
          </li>
          <li>
            <a href="#">linkedin icon</a>
          </li>
        </ul>
      </div>
    </S.HeaderStyled>
  )
}

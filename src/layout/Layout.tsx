import { FC, PropsWithChildren } from 'react'
import { Header } from './header/Header.tsx'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

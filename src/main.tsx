import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { appTheme } from './app/appTheme.ts'
import { GlobalStyles } from './app/GlobalStyles.tsx'
import { Layout } from './layout/Layout.tsx'
import { Contacts } from './layout/sections/contacts/Contacts.tsx'
import { Main } from './layout/sections/main/Main.tsx'
import { Projects } from './layout/sections/projects/Projects.tsx'
import { Skills } from './layout/sections/skills/Skills.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={appTheme}>
    <GlobalStyles />
    <Layout>
      <Main />
      <Skills />
      <Projects />
      <Contacts />
    </Layout>
  </ThemeProvider>
)

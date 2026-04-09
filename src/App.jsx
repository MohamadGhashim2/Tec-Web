import { businessConfig } from './content/business'
import { useDocumentMetadata } from './hooks/useDocumentMetadata'
import { useSiteLanguage } from './hooks/useSiteLanguage'
import LandingPage from './pages/LandingPage'

function App() {
  const { language, setLanguage, copy } = useSiteLanguage()

  useDocumentMetadata({ businessConfig, copy, language })

  return (
    <LandingPage
      businessConfig={businessConfig}
      copy={copy}
      language={language}
      onLanguageChange={setLanguage}
    />
  )
}

export default App

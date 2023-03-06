import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
// import { ThemeProvider } from "styled-components"

import { repositoryName } from '../prismicio'


const App = ({ Component, pageProps }) => {
  return (
    // <ThemeProvider>
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
    // </ThemeProvider>
  )
}

export default App

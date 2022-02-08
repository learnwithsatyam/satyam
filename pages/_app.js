import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/GoogleSearchBar.css'


function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>    
  )
}

export default MyApp

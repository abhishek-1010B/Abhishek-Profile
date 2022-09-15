import '../styles/globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
// import About from '../components/About'

function MyApp({ Component, pageProps }) {
  return <>
    <NavBar />
    <Component {...pageProps} />
    {/* <About/> */}
    <Footer/>
  </>
}

export default MyApp
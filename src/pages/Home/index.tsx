import styled from 'styled-components'
import HeroSection from '../../components/Hero'
import NavBar from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import './style.css'

const Wrapper = styled.div`
  position: relative;
  overflow:hidden;
  background-color: #000819;
  .backImage {
    position: absolute;
    opacity: 1;
    object-fit: cover;
    object-position: center;
    top: 0;
    //     height: 100vh;
  }
`

export const Home = () => {
  return (
    <Wrapper>
      <NavBar />
      <HeroSection />
      {/* <Marquee />
      <Afterhero /> */}
      {/* <div id='mint'>
        <Mint />
      </div> */}
      <div className='w-full h-full'>
        {/* <img
          className='w-full h-full backImage overflow-visible'
          alt='mask-pic'
          src='/assets/imgs/Maskgroup (1).webp'
        /> */}
        {/* <Firstcarousel />
        <Play /> */}
        {/* <Faq /> */}
      </div>
      <Footer />
    </Wrapper>
  )
}

export default Home

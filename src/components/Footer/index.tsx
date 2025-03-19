import styled from 'styled-components'
import '../style.css'
import { FaDiscord, FaSoundcloud, FaTwitter, FaYoutube } from 'react-icons/fa'
const Wrapper = styled.div`
  position: relative;
  @media (max-width: 1536px) {
    .container {
      max-width: 100% !important;
    }
  }
  .footer-links {
    font-size:14px;

    &:hover {
      text-decoration: underline;
    }
  }
`
export const Footer = () => {
  return (
    <Wrapper className='w-full absolute mt-[0px]'>
      <div className='w-full relative mt-[0px]'>
        <div className='w-full flex flex-col w-full justify-between items-center container'>
          <div className='row flex flex-col max-[768px]:flex-col  w-full items-center bg-[#030A1B] py-[30px] px-[50px] gap-5 '>
            <div className='col-lg-2 flex max-[768px]:justify-center justify-center items-center w-[100%] gap-4'>
              <img alt='Arden Logo' className='w-[20%] h-[20%] max-md:w-full' src='/assets/imgs/header/1.webp' />
            </div>

            <div className='col-lg-2 flex max-[768px]:justify-center justify-center items-center w-[100%] gap-4'>
              <a href='https://Discord.gg/eoas' target='_blank' rel='noopener noreferrer' style={{ background: 'linear-gradient(45deg, #D10ED1, #10A3DA)', borderRadius: '50%' }} className='icon-gradient p-3' >
                <span></span>
                <FaDiscord className='w-[25px] h-[25px] text-white' />
              </a>

              <a href='https://x.com/ElementsofaSoul' target='_blank' rel='noopener noreferrer' style={{ background: 'linear-gradient(45deg, #D10ED1, #10A3DA)', borderRadius: '50%' }} className='icon-gradient p-3'>
                <span></span>
                <FaTwitter className='w-[25px] h-[25px] text-white' />
              </a>

              <a href='https://www.youtube.com/channel/UCrNASt96lwJv-VsjKJTBApg' target='_blank' rel='noopener noreferrer' style={{ background: 'linear-gradient(45deg, #D10ED1, #10A3DA)', borderRadius: '50%' }} className='icon-gradient p-3'>
                <span></span>
                <FaYoutube className='w-[25px] h-[25px] text-white' />
              </a>

              <a href='https://soundcloud.com/elements-of-a-soul' target='_blank' rel='noopener noreferrer' style={{ background: 'linear-gradient(45deg, #D10ED1, #10A3DA)', borderRadius: '50%' }} className='icon-gradient p-3'>
                <span></span>
                <FaSoundcloud className='w-[25px] h-[25px] text-white' />
              </a>
            </div>

            <div className=' col-lg-10 flex flex-row max-[768px]:justify-center items-center justify-center gap-5 w-[100%]'>
              <p className='text-white text-xs'>@2025 Elementsofsoul. All rights reserved</p>
              <a
                target='_blank'
                rel='noreferrer noopener'
                className='text-white footer-links'
              >
                | Terms & Conditions
              </a>
              <a
                target='_blank'
                rel='noreferrer noopener'
                className='text-white footer-links'
              >
                | Privacy Policy
              </a>

            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer

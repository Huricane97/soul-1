import React from "react";
import { FaGift } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 100%;

  .backImage {
    position: absolute;
    opacity: 1;
    object-fit: cover;
    top: 0;
    height: 100vh;
  }
  .new {
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 10;
  }

  .contentWrapper {
    position: relative;
    width: 80%;
    .titleCaption {
    
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      text-align: left;
      background: linear-gradient(90deg, #D10ED1, #10A3DA);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media (max-width: 768px) {
        font-size: 32px;
        text-align: center;
      }
    }
    .titletext {
    text-align:left;
      font-family: 'MonumentExtended' !important;
      color: #CC9900;
      @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
      }
    }
    .mintBtn {
      font-size: 18px;
      font-weight: 700;
      color: #000;
      opacity: 1;
      background: linear-gradient(90deg, #D10ED1, #10A3DA);
      padding: 5px 15px;
      transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
      border: none;
      color: white;
      border-radius: 25px;
    }
    .sidebutton {
      font-size: 18px;
      font-weight: 700;
      color: white;
      opacity: 1;
      background-color: transparent !important;
      border: 2px solid #D946EF;
      padding: 10px 20px;
      border-radius: 25px;
    }

    .sidebutton:hover {
      color: black;
      background: linear-gradient(90deg, #D10ED1, #10A3DA);
    }

    .mintBtn:hover {
      background-color: rgb(136, 244, 149);
      color: black;
    }
  }
`;

const LandingPage: React.FC = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <section className="relative h-screen max-md:h-full max-md:pt-12 flex items-center justify-left bg-cover bg-center px-5">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/imgs/header-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="contentWrapper text-center p-6 rounded-lg !w-[50%] max-md:!w-[100%]">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-400 titleCaption">Unite with the Elite</h1>
          <p className="mt-4 text-xl titletext">Join Our Guild Today!</p>
          <p className="mt-4 text-md text-left text-white max-md:text-center">Become a part of a community of champions, unlock exclusive rewards, and embark on epic adventures that will shape the future of our world.</p>
          <div className="flex flex-row gap-2 items-center my-8">
            <FaGift className="text-xl" style={{ fill: "url(#gradient1)" }} />
            <svg width="0" height="0">
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#D10ED1", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#10A3DA", stopOpacity: 1 }} />
              </linearGradient>
            </svg>
            <p className="text-sm text-left text-white" >
              Join giveaways and contests, win from a $20,000 prize pool
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-purple-600 px-6 py-2 rounded-lg text-white mintBtn"><a href="https://Discord.gg/eoas" target='_blank'>Join Discord</a></button>
            <button className="sidebutton"><a href="/UserAuth">Giveaways</a></button>
          </div>

        </div>
      </section>
      {/* Community-Driven Gaming Section */}
      <section
        className="relative h-screen max-md:h-full flex items-center justify-between bg-cover bg-center px-5 !w-full"
        style={{ backgroundImage: "url(/assets/imgs/2.png)" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex max-md:flex-col w-full items-center justify-between">
          {/* Left Content */}
          <div className="relative z-10 flex flex-row gap-2 items-center w-[70%] max-md:w-[100%]">
            <img
              className="border border-[#fff] border-[10px] rounded-2xl h-[400px] w-[100%]"
              src="/assets/imgs/2.1.jpg"
              alt="Gaming Experience"
            />
          </div>

          {/* Right Content */}
          <div className="contentWrapper text-center p-12 rounded-lg w-[50%] max-md:w-[100%] max-md:p-0 max-md:my-4">
            <h2 className="mt-4 text-xl titletext">Where Time and Effort Always Pay Off</h2>

            <h1 className="text-4xl md:text-6xl font-bold text-purple-400 titleCaption">
              A Community-Driven Gaming Experience
            </h1>
            <p className="mt-4 text-md text-left text-white max-md:text-center">
              Our community is ingeniously woven into the gameplay, ensuring that both gamers and non-gamers are rewarded for
              their time and effort.
              As a community member, you are an integral part of the entire game economy.
            </p>
            <div className="mt-6 flex justify-left gap-4">
              <button className="bg-purple-600 px-6 py-2 rounded-lg text-white mintBtn w-[20%] max-md:w-full">
                <a href="https://Discord.gg/eoas" target='_blank'>
                  Join Discord
                </a>
              </button>
            </div>
          </div>


        </div>
      </section>

      {/* Craft & Collect Section */}
      <section
        className="relative h-screen max-md:h-full flex max-md:flex-col items-center justify-between bg-cover bg-center px-5 !w-full"
        style={{ backgroundImage: "url(/assets/imgs/3.png)" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex max-md:flex-col w-full items-center justify-between">
          {/* Left Content */}
          <div className="contentWrapper text-center p-6 rounded-lg w-[30%] max-md:w-[100%] max-md:p-0 max-md:my-4">
            <h2 className="mt-4 text-xl titletext">Craft Game Items, Collect NFTs, and Win Big!</h2>

            <h1 className="text-4xl md:text-6xl font-bold text-purple-400 titleCaption">
              Craft, Collect, and Win Big!

            </h1>
            <p className="mt-4 text-md text-left text-white max-md:text-center  ">
              Take part in crafting valuable game items, collecting exclusive NFTs, and uncovering rare land plots.
              Even non-gamers can play a key role in creating and gathering rewards.
              Plus, enjoy chances to win in our raffles, with prizes ranging from iPhones to Bitcoin, all from a prize pool of over $20,000.
              Don’t miss out on exclusive NFT avatars and exciting rewards!
            </p>
            <div className="mt-6 flex justify-left gap-4">
              <button className="bg-purple-600 px-6 py-2 rounded-lg text-white mintBtn w-[30%] max-md:w-full">
                <a href="/UserAuth">
                  EOAS Game
                </a>
              </button>
            </div>
          </div>

          {/* Right Content */}


          <div className="relative z-10 flex flex-row gap-2 items-center w-[70%] max-md:w-[100%]">
            <video
              className="border border-[#fff] border-[10px] rounded-2xl h-[100%] !w-[100%]"
              autoPlay
              loop
              muted
            >
              <source src="/assets/imgs/3.1.mp4" type="video/mp4" />
            </video>
          </div>


        </div>
      </section>
      {/* Mint Free NFT Section */}
      <section
        className="relative h-screen max-md:h-full flex items-center justify-between bg-cover bg-center px-5 !w-full"
        style={{ backgroundImage: "url(/assets/imgs/4.png)" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex max-md:flex-col w-full items-center justify-center">
          {/* Left Content */}
          {/* <div className="relative z-10 flex flex-row gap-2 items-center w-[50%] max-md:w-[100%]">
            <img
              className="border border-[#fff] border-[10px] rounded-2xl h-[550px] !w-[450px]"
              src="/assets/imgs/7.jpg"
              alt="Gaming Experience"
            />
          </div> */}

          {/* Right Content */}
          <div className="contentWrapper flex flex-col items-center justify-center text-center p-6 rounded-lg w-full max-md:w-[100%] max-md:p-0 max-md:my-4">
            <h1 className="text-4xl md:text-6xl font-bold text-purple-400 titleCaption">
              Mint Your Exclusive
              Free NFT
            </h1>
            <p className="mt-4 text-xl titletext">Limited Available — Get Yours Before They're Gone!</p>

            {/* <div className="mt-6 flex justify-center gap-4">
              <button className="bg-purple-600 px-6 py-2 rounded-lg text-white mintBtn">
                Mind Your NFT
              </button>
            </div> */}
          </div>


        </div>
      </section>

      {/* future nfts */}
      <section className="relative h-screen max-md:h-full flex items-center justify-center bg-cover bg-center px-5" style={{ backgroundImage: "url(/assets/imgs/6.png)" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="contentWrapper flex flex-col items-center justify-center text-center p-6 rounded-lg">
          <h1 className="text-4xl md:text-6xl !text-center font-bold text-purple-400 titleCaption">Own Your Future NFT</h1>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-6">
            <img className="rounded-[10px] w-[200px] max-md:w-[100px]" src="/assets/imgs/6.1.png" alt="NFT" />
            <img className="rounded-[10px] w-[200px] max-md:w-[100px]" src="/assets/imgs/6.2.png" alt="NFT" />
            <img className="rounded-[10px] w-[200px] max-md:w-[100px]" src="/assets/imgs/6.3.png" alt="NFT" />
            <img className="rounded-[10px] w-[200px] max-md:w-[100px]" src="/assets/imgs/6.4.png" alt="NFT" />
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-purple-600 px-6 py-2 rounded-lg text-white mintBtn">
              <a href="/UserAuth">
                Free NFT Mint
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* join discord */}
      <section
        className="relative h-screen max-md:h-full flex items-center justify-center bg-cover bg-center px-5"
        style={{ backgroundImage: "url(/assets/imgs/6.jpg)" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 contentWrapper flex flex-col items-center justify-center text-center p-6 rounded-lg">
          <div className="flex flex-row items-center justify-center gap-4 mt-6 mb-4">
            <img
              className="rounded-[10px] w-full"
              src="/assets/imgs/image.png"
              alt="NFT"
            />
          </div>
          <h1 className="text-4xl md:text-6xl !text-center font-bold text-purple-400 titleCaption">
            JOIN US ON DISCORD
          </h1>
          <p className="mt-4 text-xl titletext">Your Gateway to Exclusive Benefits</p>
          <p className="mt-4 text-md text-left text-white max-md:text-center">
            Connect, collaborate, and stay ahead. Be part of the conversation that shapes Element of Soul.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-purple-600 px-6 py-2 rounded-lg text-white mintBtn">
              <a href="https://Discord.gg/eoas" target='_blank'>
                Join Discord
              </a>
            </button>
          </div>
        </div>
      </section>

    </Wrapper>
  );
};

export default LandingPage;
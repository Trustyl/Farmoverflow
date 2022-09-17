
let rickRollLinks = [
  'https://www.vecteezy.com/video/8174698-animation-loading-circle-icon-loading-gif-loading-screen-gif-loading-video-spinner-gif-video-loading-animation-video-loading-on-black-background',
  
];

const getRandomRickRollLink = () => {
  const randomNum = Math.floor(Math.random() * rickRollLinks.length);
  return rickRollLinks[randomNum];
}

export default getRandomRickRollLink;
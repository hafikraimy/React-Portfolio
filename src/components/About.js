import {
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Image from 'next/image';

const About = ({ darkMode, setDarkMode }) => {
  return (
    <section className='min-h-screen mb-10 px-10 lg:px-40 md:px-20'>
      <nav className='pt-8 mb-12 flex justify-between dark:text-white'>
        <h1></h1>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className='cursor-pointer text-2xl'
            />
          </li>
          <li>
            <a
              href='https://drive.google.com/file/d/1pUq3dHf0IbBVzBfihHnNXnKUiRc7kCom/view?usp=drive_link'
              target='_blank'
              className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className='text-center p-10 py-5'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
          Hi, I'm Raimy
        </h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
          Software Developer
        </h3>
        <p className='text-md pt-2 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-md mx-auto'>
          I love to build amazing apps. Join me down
          below and let's get cracking!
        </p>
      </div>
      <div className='text-5xl flex dark:text-gray-400 justify-center gap-16 py-3 text-gray-500 '>
        <a
          href='https://www.linkedin.com/in/ahmad-hafik-raimy-374112108'
          target='_blank'
        >
          <AiFillLinkedin className='hover:text-gray-800' />
        </a>
        <a href='https://github.com/hafikraimy' target='_blank'>
          <AiFillGithub className='hover:text-gray-800 cursor-pointer' />
        </a>
      </div>
      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:w-96 md:h-96'>
        <Image src='/dev-ed-wave.png' fill style={{ objectFit: 'cover' }} />
      </div>
    </section>
  );
};
export default About;

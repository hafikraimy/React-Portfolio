import { skills } from '../utils/data';
import { AiFillCheckSquare } from 'react-icons/ai';

const Skills = () => {
  return (
    <section id='skills' className='px-10 lg:px-40 md:px-20'>
      <div className='container px-5 py-10 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='md:text-3xl text-2xl font-medium title-font text-gray-800 mb-4 dark:text-gray-50'>
            Skills &amp; Technologies 
          </h1>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 mx-2'>
          {skills.map((skill) => (
            <div key={skill} className='p-2 sm:w-1/2 w-full'>
              <div className='shadow-lg rounded flex p-4 h-full items-center bg-white'>
                <AiFillCheckSquare className='text-blue-700 w-6 h-6 flex-shrink-0 mr-4' />
                <span className='font-medium text-gray-800'>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;

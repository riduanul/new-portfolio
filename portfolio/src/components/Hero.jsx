import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faSquareGooglePlus } from '@fortawesome/free-brands-svg-icons'; 
import myImg from '../assets/images/Riduanul-Haque.jpg'
import Typewriter from 'typewriter-effect';
import resume from '../assets/resume.pdf'
import '../css/Hero.css';
function Hero() {
  return (
    <div className='relative grid grid-cols-1 md:grid-cols-2 text-white max-w-6xl mx-auto justify-around items-center py-[100px] my-5'>
      {/* <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg opacity-90"></div> */}
      <div className="title z-20">
        <div className="flex flex-col text-center md:text-left gap-3">
          <h3 className='font-bold text-2xl text-white'>Hello...</h3>
          <h1 className=' text-2xl md:text-4xl font-bold text-white'>This is <span className='text-green-600'>Md. Riduanul Haque</span></h1>
         <h3 className='text-2xl font-bold text-green-500'>
        <span className='text-white'>  I am a </span>
            <Typewriter
              options={{
                strings: ['Full-Stack Developer', 'Self Taught Programmer', 'Problem Solver', 'Self-Motivated Person', 'Learner', 'Team Player'],
                autoStart: true,
                loop: true,
              }}
            />
         </h3>
          <div className='flex gap-4 justify-center md:justify-start'>
           <a href="https://github.com/riduanul" target='blank' className=''><FontAwesomeIcon  icon={faGithub} size='2x' className='hover:bg-green-500 rounded-full cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a> 
            <a href="https://www.linkedin.com/in/riduanul-haque/" target='blank'><FontAwesomeIcon icon={faLinkedin} size='2x' className='hover:bg-green-500 rounded cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a>
            <a href="https://www.facebook.com/riduanul.haque.19/" target='blank'><FontAwesomeIcon icon={faFacebook} size='2x' className='hover:bg-green-500 rounded-full cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a>
            <a href="" target='blank'><FontAwesomeIcon icon={faSquareGooglePlus} size='2x' className='hover:bg-green-500 rounded cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a>
          </div>
        </div>
     
            
                <a href={resume} download="Riduanul Haque" className='flex justify-center md:justify-start  '><button type="button" className="my-5 text-white bg-gradient-to-br from-green-500 to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Resume</button></a>
            
      </div>
      <div className="img rounded-full" >
        <img src={myImg} alt="img" width="500" className='rounded shadow-lg'/>
      </div>
      {/* <div className="corner-gradient"></div> */}
    </div>
  );
}

export default Hero;

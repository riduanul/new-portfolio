import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import me from '../assets/images/Photo.png'

function AboutMe() {
  return (
   <div id='about' className='w-[85%] mx-auto my-[100px] z-20  '  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="300"
   data-aos-duration="700">
  <div className="title flex items-center justify-center ">
        <span className="w-24 h-[1px] bg-gray-400"></span>
        <span className='text-2xl font-bold text-center text-green-600 my-5 border-gray-400 border p-2  rounded'>About <span className='text-white'>Me</span></span>
        <span className="w-24 h-[1px] bg-gray-400"></span>
  </div>
     <div className="  text-white grid grid-cols-1 md:grid-cols-2 justify-around items-center gap-3">
     
        <img src={me} alt="" className='mb-[80px] z-20' />
       <div className="details">
        <h3 className='font-bold text-center font-bold text-green-500 text-2xl py-5'><span className='text-white'>My</span> Introduction</h3>
            <p className='text-gray-400 text-justify'>
                Greetings! I'm Md. Riduanul Haque, a dedicated self-taught programmer with a broad skill set encompassing Data Structures & Algorithms, Object-Oriented Programming, and proficiency in various Programming languages. My journey in the realm of technology has led me to become adept in cutting-edge tools and frameworks.With a portfolio boasting over 5 completed projects, I've demonstrated my ability to turn concepts into tangible solutions. I'm driven by an insatiable thirst for knowledge and improvement, always eager to explore new technologies and methodologies. As a firm believer in the power of collaboration, I thrive in team environments, leveraging my skills and expertise to contribute effectively.At my core, I'm a hardworking individual with an unwavering commitment to excellence. I approach every project with enthusiasm and determination, seeking not only to meet expectations but to exceed them. With each opportunity, I aim to push my boundaries, refine my skills, and make meaningful contributions to the world of technology.
            </p>
            <div className="expertise flex justify-between my-5">
                <div className="problem-solving">
                    <h1 className='text-3xl font-bold text-white text-center'>300+</h1>
                    <h4 className='font-bolder text-green-500 text-center text-green-500'>Problem Solving</h4>
                </div>
                <div className="problem-solving">
                    <h1 className='text-3xl font-bold text-white text-center'>10+</h1>
                    <h4 className='font-bolder text-green-500 text-center text-green-500'>Completed Projects</h4>
                </div>
                <div className="problem-solving">
                    <h1 className='text-3xl font-bold text-white text-center'>0-1</h1>
                    <h4 className='text-xl font-bolder text-green-500 text-center text-green-500'>Work Experience</h4>
                </div>
            </div>
       </div>
       
      
    </div>
   </div>
  )
}

export default AboutMe
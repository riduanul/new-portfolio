import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import '../css/Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faPython} from '@fortawesome/free-brands-svg-icons';
import cpp from '../assets/images/cpp.png' 
import django from '../assets/images/django.png' 
import mysql from '../assets/images/mysql.png' 
import Node from '../assets/images/Node.png' 
import ex from '../assets/images/ex.png' 
import dsa from '../assets/images/dsa.png' 
import algorithm from '../assets/images/alogorithm.png' 
import oop from '../assets/images/oop.png' 
import mongodb from '../assets/images/mdb.png' 
function Skills() {

  return (
<div  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="300"
   data-aos-duration="500">

<div className="title flex items-center justify-center" >
  <span className="w-24 h-[1px] bg-gray-400"></span>
    <span className='text-2xl font-bold text-center text-white my-5 border-gray-400 border p-2  rounded '>My <span className='text-green-600'>Skills</span></span>
    <span className="w-24 h-[1px] bg-gray-400"></span>
  </div>
    
  <section className=" text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
  

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-6">
     {/* DSA */}
      <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
        >
     <img src={dsa} alt="" className='h-[49px]'/>

        <h2 className="mt-4 text-xl font-bold text-white">Data Structure</h2>
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-3/4 h-full text-center text-xs text-gray-400 bg-sky-900  rounded-full">
                75%
            </div>
        </div>

      </a>
     {/* algorithm */}
      <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
        >
       <img src={algorithm} alt="" className='h-[49px]'/>

        <h2 className="mt-4 text-xl font-bold text-white">Algorithm</h2>
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-3/4 h-full text-center text-xs text-gray-400 bg-sky-900 rounded-full">
                75%
            </div>
        </div>

      </a>
     {/* OOP */}
      <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
        >
       <img src={oop} alt="" className='h-[49px]'/>

        <h2 className="mt-4 text-xl font-bold text-white">OOP</h2>
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-3/4 h-full text-center text-xs text-gray-400 bg-sky-900 rounded-full">
                75%
            </div>
        </div>

      </a>

           {/* C++*/}
           <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
        >
          <img src={cpp} alt=""/>
       {/* <h1 className='text-3xl text-pink-800 font-bold'>   </h1> */}

        <h2 className="mt-4 text-xl font-bold text-white">C++</h2>
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-2/3 h-full text-center text-xs text-gray-400 bg-sky-900 rounded-full">
                65%
            </div>
        </div>

      </a>

      {/* Python*/}
      <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
        >
       <h1 className='text-5xl text-green-500 font-bold'><FontAwesomeIcon icon={faPython} /></h1>

        <h2 className="mt-4 text-xl font-bold text-white">Python</h2>
        
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-3/4 h-full text-center text-xs text-gray-400 bg-sky-900 rounded-full">
                75%
            </div>
        </div>

      </a>

     {/* Javascript */}
      <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
        >
       <h1 className='text-5xl text-green-500 font-bold'><FontAwesomeIcon icon={faJs} /></h1>

        <h2 className="mt-4 text-xl font-bold text-white">Javascript</h2>
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-4/5 h-full text-center text-xs text-gray-400 bg-sky-900 rounded-full">
                80%
            </div>
        </div>

      </a>

      {/* react */}
      <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <h1 className='text-5xl text-green-500 '><FontAwesomeIcon icon={faReact} /></h1>

        <h2 className="mt-4 text-xl font-bold text-white">React</h2>
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-4/5 h-full text-center text-xs text-gray-400 bg-sky-900 rounded-full">
                80%
            </div>
        </div>

      </a>
      {/* Django */}
      <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <img src={django} alt="" className='h-[50px]' />

        <h2 className="mt-4 text-xl font-bold text-white">Django</h2>
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-3/4 h-full text-center text-xs text-gray-400 bg-sky-900 rounded-full">
                75%
            </div>
        </div>

      </a>
     
      {/* Node Js */}
      <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <img src={Node} alt="" />

        <h2 className="mt-4 text-xl font-bold text-white">Node JS</h2>
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-3/4 h-full text-center text-xs text-gray-400 bg-sky-900 rounded-full">
                75%
            </div>
        </div>

      </a>
      {/* Express Js */}
      <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <img src={ex} alt="" className='h-[45px]'/>

        <h2 className="mt-4 text-xl font-bold text-white">Express JS</h2>
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-3/4 h-full text-center text-xs text-gray-400 bg-sky-900 rounded-full">
                75%
            </div>
        </div>

      </a>
       {/* mysql */}
       <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <img src={mysql} alt="" />

        <h2 className="mt-4 text-xl font-bold text-white">MySQL</h2>
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-3/4 h-full text-center text-xs text-gray-400 bg-sky-900 rounded-full">
                75%
            </div>
        </div>

      </a>
       {/* mongodb */}
       <a
        className="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <img src={mongodb} alt="" className='h-[48px]'/>

        <h2 className="mt-4 text-xl font-bold text-white">MongoDB</h2>
        <div className="w-full h-4 bg-gray-500 rounded-full mt-3">
            <div className="w-3/4 h-full text-center text-xs text-gray-400 bg-sky-900 rounded-full">
                75%
            </div>
        </div>

      </a>
   

      
    </div>

  </div>
</section>

  
  
    </div>
  )
}

export default Skills
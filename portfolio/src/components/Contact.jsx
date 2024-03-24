import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faSquareGooglePlus } from '@fortawesome/free-brands-svg-icons';
function Contact() {
  return (
    <section id='contact' className="mb-[120px] dark:bg-gray-800 dark:text-gray-50 text-white" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="300"
	data-aos-duration="500">
        <div className="heading text-white my-[80px]">
        {/* heading */}
        <div className="title flex items-center justify-center">
          <span className="w-24 h-[1px] bg-gray-400"></span>
          <span className='text-2xl font-bold text-center text-white my-5 border-gray-400 border p-2  rounded '>Contact <span className='text-green-600'>With Me</span></span>
          <span className="w-24 h-[1px] bg-gray-400"></span>
        </div>
      </div>
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6 md:text-left text-center">
			<h1 className="text-4xl font-bold text-green-500">Get in <span className='text-white'>touch</span></h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4 ">
				<p className="flex items-center justify-center md:justify-start ">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Rangamati, Chattogram, Bangladesh.</span>
				</p>
				<p className="flex items-center justify-center md:justify-start">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+8801794212131</span>
				</p>
				<p className="flex items-center justify-center md:justify-start">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>riduanul.haque1@gmail.com</span>
				</p>
                <div className='flex gap-4 justify-center md:justify-start'>
                        <a href="https://github.com/riduanul" target='blank' className=''><FontAwesomeIcon  icon={faGithub} size='2x' className='hover:bg-green-500 rounded-full cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a> 
                        <a href="https://www.linkedin.com/in/riduanul-haque/" target='blank'><FontAwesomeIcon icon={faLinkedin} size='2x' className='hover:bg-green-500 rounded cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a>
                        <a href="https://www.facebook.com/riduanul.haque.19/" target='blank'><FontAwesomeIcon icon={faFacebook} size='2x' className='hover:bg-green-500 rounded-full cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a>
                        <a href="" target='blank'><FontAwesomeIcon icon={faSquareGooglePlus} size='2x' className='hover:bg-green-500 rounded cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a>
                </div>
			</div>
		</div>
		<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Riduanul Haque" className=" p-2 h-8 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="riduanul.haque1@gmail.com" className="p-2 h-8 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="6" placeholder="Your Message Here.." className="p-2 block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 dark:bg-gray-800"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-green-800 dark:text-gray-900 focus:dark:ring-violet-400 hover:dark:ring-violet-400">Submit</button>
		</form>
	</div>
</section>
  )
}

export default Contact
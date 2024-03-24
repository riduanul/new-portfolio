import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faSquareGooglePlus } from '@fortawesome/free-brands-svg-icons'; 


function Footer() {
  return (
    <footer className=" text-gray-200">
	
	<div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row justify-center md:justify-between items-center ">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
			<li>All Rights Reserved Md. Riduanul Haque 2024</li>
			
		</ul>
		<div className="flex flex-col justify-center pt-6 lg:pt-0">
        <div className='flex gap-4'>
           <a href="https://github.com/riduanul" target='blank' className=''><FontAwesomeIcon  icon={faGithub} size='2x' className='hover:bg-green-500 rounded-full cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a> 
            <a href="https://www.linkedin.com/in/riduanul-haque/" target='blank'><FontAwesomeIcon icon={faLinkedin} size='2x' className='hover:bg-green-500 rounded cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a>
            <a href="https://www.facebook.com/riduanul.haque.19/" target='blank'><FontAwesomeIcon icon={faFacebook} size='2x' className='hover:bg-green-500 rounded-full cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a>
            <a href="" target='blank'><FontAwesomeIcon icon={faSquareGooglePlus} size='2x' className='hover:bg-green-500 rounded cursor-pointer transition-transform duration-400 hover:-translate-y-1'/></a>
          </div>
		</div>
	</div>
</footer>
  )
}

export default Footer
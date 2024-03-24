import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinode } from '@fortawesome/free-brands-svg-icons';
import ticketBooking from '../assets/images/ticketBooking.png';
import doctor from '../assets/images/doctors.png';
import hotel from '../assets/images/hotel.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function Project() {
  const projects = [
    {
      name: 'Ticket Booking App',
      description: 'Key Features: Train Schedule Search by Destination: Users can search for train schedules based on their destination and also can filter train schedules by specifying the date and time of travel. Booking Ticket: Users can easily book train tickets after selecting the desired schedule. Make Comments: Users can add comments or notes while booking tickets for reference. User can cancel their ticket from user dashboard and can download tickets',
      technologies: ['Python', 'Django', 'Bootstrap'],
      liveLink: 'https://ticket-booking-app-nl0a.onrender.com/',
      githubLink: 'https://github.com/riduanul/ticket-booking-app',
      image: ticketBooking
    },
    {
      name: 'Hotel Booking App',
      description: 'A Hotel Booking app user can book hotel by category. can see details, and can cancel booking admin can add/remove hotel and user.',
      technologies: ['react', 'tailwind', 'Python', 'django', 'rest_framework'],
      liveLink: 'https://github.com/riduanul/book-hotel-backend',
      githubLink: 'https://github.com/riduanul/book-hotel-backend',
      image: hotel
    },
    {
      name: 'Doctors Portal',
      description: 'A Doctor Appointment taking app where user can take an appointment by date and specialized doctor. doctor can approve/cancel the appointment admin can add/delete a doctor. manage appointments etc.',
      technologies: ['react', 'redux', 'tailwind', 'Nodejs', 'ExpressJs', 'MongoDB'],
      liveLink: 'https://github.com/riduanul/doctors-portal-new',
      githubLink: 'https://github.com/riduanul/doctors-portal-new',
      image: doctor
    },
  ];

  return (
    <div className='w-full md:w-[85%] mx-auto'id='project'>
      <div className="heading text-white my-[80px]">
        {/* heading */}
        <div className="title flex items-center justify-center">
          <span className="w-24 h-[1px] bg-gray-400"></span>
          <span className='text-2xl font-bold text-center text-white my-5 border-gray-400 border p-2 rounded '>My <span className='text-green-600'>Projects</span></span>
          <span className="w-24 h-[1px] bg-gray-400"></span>
        </div>
      </div>

      {projects.map((project, index) => (
        <div data-aos={`${index%2 !== 0 ? 'fade-left' : 'fade-right'}`} data-aos-offset="300"
        data-aos-duration="700" className= {`my-[80px] flex flex-col md:flex-row items-center justify-between gap-5 ${index % 2 != 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`} key={index}>
          <div className="flex flex-col p-4 text-white w-full md:w-[60%]">
            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
            <p className="mb-4 text-gray-400 text-justify">{project.description}</p>
            <div className='flex flex-wrap items-center space-x-1 md:space-x-2'>
              <p className='font-bold text-lg'>Technologies: </p>{project.technologies.map((tech, index) => (
                <button key={index} className='btn btn-sm border p-1 rounded-md bg-gray-700'>{tech}</button>
              ))}
            </div>
            <div className="flex space-x-4 gap-3 py-3">
              <p className='font-bold text-lg'>Links: </p>
              <a href={project.liveLink} target='blank' className="text-white text-lg hover:text-blue-500"><FontAwesomeIcon icon={faLinode} /> Live</a>
              <a href={project.githubLink} target='blank' className="text-white text-lg hover:text-blue-500"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
            </div>
          </div>

          <div className="overflow-hidden md:w-[50%] h-[300px] cursor-pointer">
            <div className="hover:object-bottom">
              <img src={project.image} alt={project.name} className="hover:overflow-y-scroll" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Project;

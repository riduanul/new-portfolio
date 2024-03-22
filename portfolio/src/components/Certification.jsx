import web from '../assets/images/web.jfif'
import redux from '../assets/images/redux.jfif'
import python from '../assets/images/python.png'
function Certification() {
  return (
    <section className='max-w-[85%] mx-auto'>
         {/* heading */}
        <div className="title flex items-center justify-center py-[30px] my-5">
          <span className="w-24 h-[1px] bg-gray-400"></span>
          <span className='text-2xl font-bold text-center text-white my-5 border-gray-400 border p-2  rounded '>My <span className='text-green-600'>Certificates</span></span>
          <span className="w-24 h-[1px] bg-gray-400"></span>
        </div>
        <div className="grid grid-cols-1 ms:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center">
        <div className="1 hover:scale-110 transition-transform duration-500 cursor-pointer">
            <img src={web} alt=""/>
        </div>
        <div className="1  hover:scale-110 transition-transform duration-500 cursor-pointer">
            <img src={redux} alt=""/>
        </div>
        <div className="1  hover:scale-110 transition-transform duration-500 cursor-pointer">
            <img src={python} alt=""/>
        </div>
  
    </div>
    </section>
  )
}

export default Certification
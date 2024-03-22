import datatype from '../assets/images/js.png'
import es from '../assets/images/es.png'
import fundamental from '../assets/images/fundumentaljs.png'
function Blogs() {
    return (
      <section className="w-[85%] mx-auto text-gray-400 text-center py-[60px]">
        {/* heading */}
        <div className="title flex items-center justify-center py-[30px] my-5">
          <span className="w-24 h-[1px] bg-gray-400"></span>
          <span className='text-2xl font-bold text-center text-white my-5 border-gray-400 border p-2  rounded '>My <span className='text-green-600'>Blogs</span></span>
          <span className="w-24 h-[1px] bg-gray-400"></span>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 justify-items-around">
          <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
            <img src={datatype} alt="" className="w-full rounded-t-md h-72 sm:h-60 md:h-72 lg:h-80 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-wide">JavaScript Data Type</h2>
              </div>
              <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"><a href="https://riduanul-haque1.medium.com/javascript-datatypes-for-beginners-96b4d994b6a6" target='blank'>Read more</a></button>
            </div>
          </div>
          <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
            <img src={es} alt="" className=" w-full rounded-t-md h-72 sm:h-60 md:h-72 lg:h-80 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-wide">JavaScript ES6</h2>
              </div>
              <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"><a href="https://riduanul-haque1.medium.com/what-today-i-learn-about-javascript-21b15c9e6ff9" target='blank'>Read more</a></button>
            </div>
          </div>
          <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
            <img src={fundamental} alt="" className=" w-full rounded-t-md h-72 sm:h-60 md:h-72 lg:h-80 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-wide">JS Fundamental</h2>
              </div>
              <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"><a href="https://riduanul-haque1.medium.com/javascript-fundamental-5778718a6e4c" target='blank'>Read more</a></button>
            </div>
          </div>
         
        </div>
      </section>
    )
  }
  
  

export default Blogs
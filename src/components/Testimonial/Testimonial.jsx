import React from 'react';

const TestimonialsData = [
  {
    name: "Aarav Mehta",
    image: "",
    description: "The service was outstanding — fast, friendly, and exactly what I needed.",
    aosDelay: "0"
  },
  {
    name: "Priya Sharma",
    image: "",
    description: "Truly impressed with the professionalism and quality delivered. Highly recommend!",
    aosDelay: "300"
  },
  {
    name: "Rohan Verma",
    image: "",
    description: "From start to finish, the process was smooth and hassle-free. Great experience!",
    aosDelay: "1000"
  },
]


const Testimonial = () => {
  return (
    <div className='dark:bg-black dark:text-white
    py-14 sm:pb-24'>
      <div className="container">
        {/* header */}
        <div className=' space-y-4 pb-12'>
            <p className='text-3xl font-semibold
            font-serif text-center sm:text-4xl
            '>What Our Clients Say About Us</p>
            <p className='text-center sm:px-44'>
              Hear directly from those who’ve experienced our service.
            </p>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-1
        sm:grid-cols-2 md:grid-cols-3 gap-8 
        text-black dark:text-white
        ">
          {TestimonialsData.map((data) =>{
            return(
              <div 
              data-aos= "fade-up"
              data-aos-delay={data.aosDelay}
              key={data.name}
              className='card text-center group space-y-3 sm:space-y-6 p-4
              bg-gray-100 dark:bg-white/20 sm:py-12
              duration-300 rounded-lg
              '
              >
                <div className='grid place-items-center'>
                  <img
                  className='h-20 w-20 rounded-full'
                  src="https://picsum.photos/200" alt="" />
                </div>
                <div className='text-2xl'>⭐⭐⭐⭐⭐</div>
                <p>{data.description}</p>
                <p className='font-semibold text-center'>{data.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
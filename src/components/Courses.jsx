function Courses() {

  const courses = [
    "Class 9th",
    "Class 10th",
    "Class 11th Science",
    "Class 12th Science",
    "JEE Preparation",
    "NEET Preparation",
  ]

  return (
    <section   id="courses"
     className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-yellow-500 font-semibold">
            Our Courses
          </p>

          <h1 className="text-5xl font-bold text-[#0B1F3A] mt-4">
            Courses We Offer
          </h1>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {courses.map((course, index) => (

            <div
              key={index}
              className="bg-gray-100 p-10 rounded-[35px] shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
            >

              <h2 className="text-3xl font-bold text-[#0B1F3A]">
                {course}
              </h2>

              <p className="text-gray-600 mt-5 leading-7">

                Comprehensive preparation with expert guidance,
                regular tests, doubt solving, and performance tracking.

              </p>

              <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-2xl hover:bg-yellow-400 hover:text-black duration-300">
                Explore Course
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Courses



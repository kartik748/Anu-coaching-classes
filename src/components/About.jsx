function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-100"
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <div>

          <img
            src="/teachers/muneesh.jpg"
            alt="about"
            className="rounded-[40px] shadow-2xl"
          />

        </div>

        <div>

          <p className="text-yellow-500 font-semibold">
            About Zenith Academy
          </p>

          <h1 className="text-5xl font-bold text-[#0B1F3A] mt-4 leading-tight">

            Building Strong Foundations
            For Student Success

          </h1>

          <p className="text-gray-600 mt-8 leading-8 text-lg">

            Zenith Academy is a modern coaching institute dedicated
            to helping students achieve academic excellence and
            competitive success through expert faculty, structured
            courses, regular tests, and personal mentorship.

          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-3xl shadow-md">

              <h2 className="text-3xl font-bold text-blue-900">
                15+
              </h2>

              <p className="text-gray-500 mt-2">
                Years Teaching Experience
              </p>

            </div>

            <div className="bg-white p-6 rounded-3xl shadow-md">

              <h2 className="text-3xl font-bold text-blue-900">
                500+
              </h2>

              <p className="text-gray-500 mt-2">
                Successful Students
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About
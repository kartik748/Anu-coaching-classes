import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen overflow-hidden relative bg-gradient-to-r from-[#0B1F3A] to-[#102D55] text-white flex items-center"
    >

      <div className="absolute w-[300px] h-[300px] bg-yellow-400 opacity-20 blur-[120px] rounded-full top-0 left-0"></div>

      <div className="absolute w-[300px] h-[300px] bg-blue-400 opacity-20 blur-[120px] rounded-full bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-yellow-400 font-semibold mb-4">
            Welcome To Zenith Academy
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">

            Empowering Students For
            <span className="text-yellow-400">
              {" "}Academic Excellence
            </span>

          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-8">

            Professional coaching institute for Physics,
            Chemistry, and Mathematics with experienced
            faculty and student-focused learning.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="bg-yellow-400 text-black px-7 py-3 rounded-2xl font-bold hover:scale-105 duration-300">
              Start Learning
            </button>

            <button className="border border-white px-7 py-3 rounded-2xl hover:bg-white hover:text-black duration-300">
              Free Demo
            </button>

          </div>

        </motion.div>

        <div className="flex justify-center">

          <img
            src="/teachers/Kartik.jpg"
            alt="teacher"
            className="w-[380px] rounded-[40px] shadow-2xl border-4 border-yellow-400"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero
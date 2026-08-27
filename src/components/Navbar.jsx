function Navbar() {
  return (
    <nav className="bg-[#0B1F3A] text-white sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <img
            src="/logo/logo.png"
            alt="logo"
            className="w-12 h-12 rounded-full object-cover"
          />

          <h1 className="text-3xl font-bold text-yellow-400">
            ZENITH
          </h1>

        </div>

        <ul className="hidden md:flex gap-8 font-medium">

          <li>
            <a href="#home" className="hover:text-yellow-400 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-400 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#courses" className="hover:text-yellow-400 duration-300">
              Courses
            </a>
          </li>

          <li>
            <a href="#faculty" className="hover:text-yellow-400 duration-300">
              Faculty
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-400 duration-300">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar
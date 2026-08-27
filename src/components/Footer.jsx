function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>

          <h1 className="text-4xl font-bold text-yellow-400">
            ZENITH
          </h1>

          <p className="mt-6 text-gray-300 leading-8">

            Professional coaching institute for Physics,
            Chemistry, and Mathematics with experienced faculty.

          </p>

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Contact Info
          </h2>

          <p className="mt-6 text-gray-300">
            📍 Dewra Road, Jaisinghnagar
          </p>

          <p className="mt-4 text-gray-300">
            📞 8269272862
          </p>

          <p className="mt-4 text-gray-300">
            💬 8966924507
          </p>

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Quick Links
          </h2>

          <ul className="mt-6 space-y-4 text-gray-300">
            <li>Home</li>
            <li>Courses</li>
            <li>Faculty</li>
            <li>Contact</li>
          </ul>

        </div>

      </div>

    </footer>
  )
}

export default Footer


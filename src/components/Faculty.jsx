import facultyData from "../data/facultyData"
import FacultyCard from "./FacultyCard"

function Faculty() {
  return (
    <section id="faculty"
    
    className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-[#0B1F3A]">
            Our Expert Faculty
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Experienced teachers dedicated to student success
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {facultyData.map((teacher) => (
            <FacultyCard
              key={teacher.id}
              teacher={teacher}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Faculty

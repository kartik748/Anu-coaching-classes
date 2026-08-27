import { motion } from "framer-motion"

function FacultyCard({ teacher }) {
  return (

    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden"
    >

      <img
        src={teacher.image}
        alt={teacher.name}
        className="w-full h-[300px] object-cover"
      />

      <div className="p-6">

        <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
          {teacher.subject}
        </span>

        <h2 className="text-2xl font-bold mt-4">
          {teacher.name}
        </h2>

        <p className="text-gray-600 mt-2">
          {teacher.qualification}
        </p>

        <p className="text-yellow-600 font-semibold mt-2">
          {teacher.experience} Experience
        </p>

        <p className="text-gray-500 mt-4">
          {teacher.description}
        </p>

        {teacher.mobile && (
          <p className="mt-4 font-medium">
            📞 {teacher.mobile}
          </p>
        )}

        {teacher.whatsapp && (
          <a
            href={`https://wa.me/91${teacher.whatsapp}`}
            target="_blank"
            className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-xl hover:scale-105 duration-300"
          >
            WhatsApp
          </a>
        )}

      </div>

    </motion.div>
  )
}

export default FacultyCard
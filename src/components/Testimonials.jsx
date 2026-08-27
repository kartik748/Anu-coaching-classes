function Testimonials() {

  const reviews = [
    "Best coaching institute with supportive teachers and excellent study material.",

    "Concepts are explained in a very easy and practical way.",

    "Regular tests and doubt sessions helped improve my performance.",
  ]

  return (
    <section id="testimonials"
    className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-yellow-500 font-semibold">
            Testimonials
          </p>

          <h1 className="text-5xl font-bold text-[#0B1F3A] mt-4">
            What Students Say
          </h1>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="bg-white p-10 rounded-[35px] shadow-lg"
            >

              <h1 className="text-4xl">⭐⭐⭐⭐⭐</h1>

              <p className="text-gray-600 mt-6 leading-8">
                {review}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Testimonials


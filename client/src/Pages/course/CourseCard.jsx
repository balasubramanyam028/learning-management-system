import { useNavigate } from 'react-router-dom'

function CourseCard({ data }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate('/course/description', { state: { ...data } })}
      className="card w-96 bg-parchment bg-cover shadow-xl border-4 border-stone 
                 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-gold relative overflow-hidden"
    >
      {/* Decorative glowing border effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition duration-500">
        <div className="w-full h-full border-2 border-gold animate-pulse"></div>
      </div>

      <figure>
        <img
          src={data.thumbnail?.secure_url}
          alt="course thumbnail"
          className="w-full h-60 object-cover rounded-t-md"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title capitalize text-xl font-heading text-stone">
          {data.title}
          <span className="badge badge-primary text-xs">NEW</span>
        </h2>

        <p className="capitalize font-body font-bold text-stone">
          Instructor : <span className="text-gold">{data.createdBy}</span>
        </p>

        <p className="capitalize font-body font-bold text-stone">
          Number of Lectures : <span className="text-gold">{data.numberOfLectures}</span>
        </p>

        <div className="card-actions justify-end">
          <div className="badge capitalize py-4 px-3 border-2 border-gold text-stone font-heading bg-stone/30">
            {data.category}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { SiReact, SiTailwindcss, SiHtml5, SiJavascript} from 'react-icons/si';


const projects = [
  {
    title: "Personal Website",
    description: "The thing you're currently looking at, made with React and Tailwind.",
    image: "",
    link: "https://github.com/kxnradd/Personal-Site",
    tech: [SiReact, SiTailwindcss, SiHtml5, SiJavascript]
  },
];

function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="min-h-screen dark:bg-black bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="relative w-full group">
        <Swiper
          modules={[Navigation, Pagination]}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          slidesPerView={1}
          spaceBetween={30}
          className="w-full"
        >
          {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="dark:bg-black bg-white rounded-xl shadow overflow-hidden">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="dark:text-white text-gray-600 mb-4">{project.description}</p>

                <div className="flex justify-center gap-4 text-3xl text-blue-500 dark:text-white mb-4">
                  {project.tech.map((Icon, idx) => (
                    <Icon key={idx} title={Icon.name.replace('Si', '')} />
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block dark:bg-red-600 bg-green-500 text-white px-4 py-2 rounded dark:hover:bg-red-700 hover:bg-green-600"
                >
                  See More
                </a>
              </div>
            </div>
          </SwiperSlide>

          ))}
        </Swiper>

        <button
          ref={prevRef}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 
                     bg-transparent text-green-500 dark:text-red-500 
                     p-2 rounded-full shadow text-4xl transition 
                     opacity-0 group-hover:opacity-100"
        >
          ‹
        </button>

        <button
          ref={nextRef}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 
                     bg-transparent text-green-500 dark:text-red-500 
                     p-2 rounded-full shadow text-4xl transition 
                     opacity-0 group-hover:opacity-100"
        >
          ›
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-green-500 dark:bg-red-600 scale-110'
                  : 'bg-gray-400 dark:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

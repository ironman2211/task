import axios from 'axios'
import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Home = () => {
const [projects, setProjects] = React.useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc226ee8f2ab25b8d63299685133e478')
        .then((res) => {
            console.log(res.data.results)
            setProjects(res.data.results)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


  return (
    <div className='p-10'>
      <h1 className='text-4xl'>
        Home Page
      </h1>
      <div className='bg-red w-full my-10 flex flex-wrap  gap-4'>
      {
                      projects.map((project, index) => {
                        return (
                            <div key={index} className="whiteShade-glassmorphism   cursor-pointer  w-80  xl:h-128 xl:w-96 rounded-2xl p-5 flex flex-col  justify-between shadow-lg">
                                <div className="w-full h-52 rounded-2xl bg-gray-400 mb-4">
                                    <a href={project.homepage} target="noopener">
                       
                                        <img src={`https://image.tmdb.org/t/p/w1280${project.poster_path}`} className="h-full w-full object-cover rounded-xl hover:scale-105" />
                                    </a>
                                </div>
                                <b className=" text-lg xl:text-xl text-cyan-400">
                                    {project.original_title}
                                </b>
                                <span className="  xl:text-sm text-justify text-xs">{
                                    project.overview.length > 150 ? project.overview.substring(0, 100) + '...' : project.overview
                                } </span>
                                <div className="flex flex-wrap gap-2 mt-3 font-medium items-center justify-between">

                                  <p>
                                    popularity 
                                    </p>
                                    <p className="text-gray-600 font-bold ">
                                    {
                                        project.popularity>1000 ? (project.popularity/1000).toFixed(1) + 'k' : project.popularity 
                                    }
                                    </p>
                                     
                                </div>
                 
                            </div>
                        )
                    })
                    }
      </div>
    </div>
  )
}

export default Home

import { MdOutlineDoubleArrow } from "react-icons/md";
import ProjectCard from "./ProjectCard";
import TikTakToe from '../images/tik-tak-toe-thumb.jpg'
import recipe from '../images/racipe-thumb.jpg'
import animebase from '../images/animebase-thumb.jpg'

const Projects = () => {
  return (
    <section id="Projects" className='min-h-screen pt-12 py-8'>
      <h1 className='text-4xl font-sora font-bold
      mx-3 text-transparent flex items-center gap-1 mb-12 tracking-wide bg-gradient-to-br from-blue-950 via-blue-800 to-blue-500 w-fit bg-clip-text'>Projects <MdOutlineDoubleArrow className="text-3xl"/></h1>
      <div className="m-6 flex flex-col ">
        <ProjectCard title={'Tik Tak Toe'} text={'Experience a modern take on Tic-Tac-Toe with a built-in auto-play feature! Created using JavaScript, this game offers a challenging AI opponent, ensuring fun and engaging gameplay every time. Perfect for quick matches and testing your strategic skills!'} img={TikTakToe} pageUrl={'https://vigneshpalani3.github.io/Tik-Tak-Toe/'} gitUrl={'https://github.com/vigneshpalani3/Tik-Tak-Toe'}/>
        <ProjectCard title={'Recipe App'} text={'Discover culinary delights with my Recipe Finder App! Built with JavaScript and the Meal DB API, this app lets you search through a vast array of recipes and save your favorites. Whether you\'re looking for inspiration or planning your next meal, this app has got you covered!'} img={recipe} pageUrl={'https://vigneshpalani3.github.io/Recipe_finder/'} gitUrl={'https://github.com/vigneshpalani3/Recipe_finder'}/>
        <ProjectCard title={'AnimeBase'} text={'Explore the world of anime with my Anime Database App! Developed using React and the Jikan API, this app offers everything an anime enthusiast needs. Search for your favorite shows, discover new series, view popular and currently airing anime, and get personalized recommendations. Your ultimate anime companion awaits!'} img={animebase} pageUrl={'https://vigneshpalani3.github.io/AnimeBase/'} gitUrl={'https://github.com/vigneshpalani3/AnimeBase'}/>
      </div>
    </section>
  )
}

export default Projects
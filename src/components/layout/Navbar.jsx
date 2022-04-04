import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-sky-500/50 text-blue-800'>
      <div className='container mx-auto'>
        <div className='flex px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-moddle'>
            {title}
          </Link>
        </div>
        <div className='flex-1 px2 mx2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.defaultProps = {
  title: "Githubber",
}

export default Navbar

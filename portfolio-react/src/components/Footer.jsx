import { FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <footer className="bg-dark py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            Copyright © 2025 Harsh Kushwaha | All rights reserved
          </p>

          <Link
            to="home"
            smooth={true}
            duration={500}
            className="w-12 h-12 flex items-center justify-center bg-primary text-dark rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:-translate-y-1 cursor-pointer"
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

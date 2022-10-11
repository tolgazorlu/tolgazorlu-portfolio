import { Popover } from '@headlessui/react'
import '../index.css'


export default function Example() {
  return (
    <Popover className="relative bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:flex-1">
            <a href="#">
              <span className="text-base font-medium text-white hover:text-sky-700">Tolga Zorlu</span>
            </a>
          </div>
          
            <a href="#" className="text-base font-medium text-white hover:text-sky-700">
              CV
            </a>
            <a href="#" className="text-base font-medium text-white hover:text-sky-700">
              Projects
            </a>
            <a href="#" className="text-base font-medium text-white hover:text-sky-700">
              Musics
            </a>
            <a href="#" className="text-base font-medium text-white hover:text-sky-700">
              About
            </a>


        </div>
      </div>

    </Popover>
  )
}

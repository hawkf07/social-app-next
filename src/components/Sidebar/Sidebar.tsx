import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import { useEffect } from 'react'
import { trpc } from '../../utils/trpc'
export function Sidebar({ }) {
  return (
    <>
      <aside className="w-2/6 flex flex-col gap-3 justify-start">
        <div className='flex p-2 bg-blue-500 gap-3 items-center rounded'>
          <FaPlus className='font-3xl' />
          <a href="#" className=""> Start New Topic</a>
        </div>
        <div>
          <header>
            <h1> {"something"} </h1>
          </header>
          <div>
            sdoada
          </div>
        </div>
      </aside>
    </>
  )
}

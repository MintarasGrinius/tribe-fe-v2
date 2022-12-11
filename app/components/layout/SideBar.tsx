import { Menu } from './menu'

const SideBar = () => {
  return (
    <div className='flex flex-col rounded-xl p-3 w-60 bg-gradient-to-b from-neutral-700 to-neutral-900 fixed min-h-[96%]'>
      <div className='flex justify-center h-12 text-white items-center flex-wrap'>
        <div className='flex max-w-screen-sm overflow-visible pr-3'>
          <span className='pl-1'>trib</span>
        </div>
        <div className='h-[1px] min-w-full rounded-md bg-gradient-to-r from-transparent via-white to-transparent opacity-40'></div>
      </div>
      <Menu />
    </div>
  )
}

export default SideBar

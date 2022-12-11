import SideBar from './SideBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen min-w-full bg-slate-100 font-mono flex p-5'>
      <SideBar />
      <div className='ml-[240px] pl-5'>{children}</div>
    </div>
  )
}

export default Layout

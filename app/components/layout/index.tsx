import SideBar from './SideBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen w-full bg-slate-100 font-mono flex p-5'>
      <SideBar />
      <div className='pl-5 pr-5'>{children}</div>
    </div>
  )
}

export default Layout

import type { ActionFunction } from '@remix-run/node'
import CelebrationIcon from '@mui/icons-material/Celebration'
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen w-full bg-slate-100 font-mono flex p-5'>
      <div className='rounded-xl p-3 w-60 bg-gradient-to-b from-neutral-700 to-neutral-900'>
        <div className='flex justify-center h-12 text-white items-center flex-wrap'>
          <div className='flex max-w-screen-sm overflow-visible pr-3'>
            <CelebrationIcon
              style={{ width: '20px' }}
              classes={{ root: 'w-1 h-1' }}
            />
            <span className='pl-1'>trib</span>
          </div>
          <div className='h-[1px] w-full rounded-md bg-gradient-to-r from-transparent via-white to-transparent opacity-40'></div>
        </div>
        <div className='flex flex-col'>
          <button className='bg-white text-neutral-700 rounded-lg h-8'>
            Home
          </button>
          <button>Home</button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export const action: ActionFunction = async ({ request }) => {}

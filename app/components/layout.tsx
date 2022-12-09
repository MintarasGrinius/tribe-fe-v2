import type { ActionFunction } from '@remix-run/node'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen w-full bg-slate-100 font-mono flex p-5'>
      <div className='rounded-xl p-3 w-60 bg-gradient-to-b from-neutral-700 to-neutral-900'>
        <button>Home</button>
        <button>Home</button>
      </div>
      <div>{children}</div>
    </div>
  )
}

export const action: ActionFunction = async ({ request }) => {}

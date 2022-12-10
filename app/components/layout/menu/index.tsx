import type { ActionFunction } from '@remix-run/node'
import type { MenuItemType } from './type'
import MenuItem from './MenuItem'

const menuItems: MenuItemType[] = [
  {
    name: 'Home',
    path: '/home',
  },
  {
    name: 'Kudos',
    path: '/kudos',
  },
]

export const Menu = () => {
  return (
    <>
      <div className='flex flex-col pt-1 pb-2 flex-1 h-full'>
        {menuItems.map((item) => (
          <MenuItem item={item} key={item.path} />
        ))}
      </div>
      <a
        href='/home/new-event'
        className={
          'mt-auto text-white rounded-lg h-9 flex justify-center items-center bg-gradient-to-b from-rose-300 to-rose-400'
        }
      >
        <span>{'Create new event'}</span>
      </a>
    </>
  )
}

export const action: ActionFunction = async ({ request }) => {}

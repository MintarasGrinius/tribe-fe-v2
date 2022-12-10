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
    <div className='flex flex-col pt-1 pb-2'>
      {menuItems.map((item) => (
        <MenuItem item={item} key={item.path} />
      ))}
    </div>
  )
}

export const action: ActionFunction = async ({ request }) => {}

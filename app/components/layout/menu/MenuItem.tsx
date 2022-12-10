import { useLocation } from '@remix-run/react'
import classNames from 'classnames'
import type { MenuItemType } from './type'

interface Props {
  item: MenuItemType
}

const MenuItem = ({ item: { path, name } }: Props) => {
  let { pathname } = useLocation()

  return (
    <a
      href={pathname !== path ? path : undefined}
      key={path}
      className={classNames(
        'mt-2 text-white rounded-lg h-9 flex justify-center items-center',
        {
          'bg-gradient-to-b from-rose-300 to-rose-400': pathname.includes(path),
          'bg-opacity-25 bg-rose-300': pathname !== path,
        }
      )}
    >
      <span>{name}</span>
    </a>
  )
}

export default MenuItem

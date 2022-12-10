import type { LoaderFunction } from '@remix-run/node'
import { requireUserId } from '~/utils/auth.server'
import Layout from '~/components/layout'
import { Outlet } from '@remix-run/react'

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)
  const url = new URL(request.url)

  return null
}
export default function Home() {
  return (
    <Layout>
      <div className='h-full flex text-black'>
        <Outlet />
      </div>
    </Layout>
  )
}

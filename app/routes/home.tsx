import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { requireUserId, getUser } from '~/utils/auth.server'
import { Layout } from '~/components/layout'
import { getOtherUsers } from '~/utils/user.server'
import { useLoaderData, Outlet } from '@remix-run/react'
import { getFilteredKudos, getRecentKudos } from '~/utils/kudos.server'
import type { Prisma } from '@prisma/client'

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)
  const url = new URL(request.url)

  return null
}
export default function Home() {
  return (
    <Layout>
      <Outlet />
      <div className='h-full flex text-red-50'>Home</div>
    </Layout>
  )
}

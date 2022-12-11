import type { LoaderFunction } from '@remix-run/node'
import Layout from '~/components/layout'
import { Outlet, useLoaderData } from '@remix-run/react'
import { getEvents } from '~/utils/event.server'

export const loader: LoaderFunction = async () => {
  const events = await getEvents()

  return events
}

export default function Home() {
  const events: any[] = useLoaderData()
  console.log(events)
  return (
    <>
      <Outlet />

      <Layout>
        <div className='min-h-full flex text-black'>
          <div className='container mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
              {events.map((card, i) => (
                <div className='w-full' key={i}>
                  <article className='overflow-hidden rounded-lg shadow-lg'>
                    <img
                      alt='Placeholder'
                      className='block h-auto w-full'
                      src='https://picsum.photos/600/400/?random'
                    />

                    <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
                      <h1 className='text-lg'>
                        <div className='no-underline hover:underline text-black'>
                          {card.title}
                        </div>
                      </h1>
                      <p className='text-grey-darker text-sm'>
                        {card?.time.slice(0, 10)}
                      </p>
                    </header>

                    <footer className='flex items-center justify-between leading-none p-2 md:p-4'>
                      <div className='flex items-center no-underline hover:underline text-black'>
                        <img
                          alt='Placeholder'
                          className='block rounded-full'
                          src='https://picsum.photos/32/32/?random'
                        />
                        <p className='ml-2 text-sm'>{`${card.event.organizer.profile.firstName} ${card.event.organizer.profile.lastName}`}</p>
                      </div>
                      <div className='no-underline text-grey-darker hover:text-red-dark'>
                        <span className='hidden'>Like</span>
                        <i className='fa fa-heart'></i>
                      </div>
                    </footer>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

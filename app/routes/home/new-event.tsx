import { ActionArgs } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { requireUserId } from '~/utils/auth.server'
import { createEvent } from '~/utils/event.server'

export async function action({ request }: ActionArgs) {
  const userId = await requireUserId(request)
  const body = await request.formData()

  return await createEvent(userId, {
    capacity: 1,
    description: body.get('description'),
    location: body.get('location'),
    time: new Date(),
    title: body.get('title'),
  })
}

const NewEvent = () => {
  const actionData = useActionData<typeof action>()

  console.log(actionData)
  return (
    <div className='h-screen w-screen absolute top-0 left-0 bg-opacity-70 bg-black flex justify-center items-center'>
      <div className='flex flex-col rounded-xl p-10 w-[500px] bg-gradient-to-b from-neutral-700 to-neutral-900'>
        <form method='post' className='flex flex-col gap-4'>
          <label htmlFor='description'>description</label>
          <input name='description' />
          <label htmlFor='location'>location</label>
          <input name='location' />
          <label htmlFor='time'>time</label>
          <input name='time' />
          <label htmlFor='title'>title</label>
          <input name='title' />
          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default NewEvent

import { ActionArgs, json, redirect } from '@remix-run/node'
import { Form, useActionData, useSubmit } from '@remix-run/react'
import { Form as AntdFrom, Input } from 'antd'
import { requireUserId } from '~/utils/auth.server'
import { createEvent } from '~/utils/event.server'

const { Item } = AntdFrom

export async function action({ request }: ActionArgs) {
  const userId = await requireUserId(request)
  const body = await request.formData()
  const description = body.get('description')
  const location = body.get('location')
  const time = new Date()
  const title = body.get('title')

  const errors = {
    title: title ? null : 'Title is required',
    description: description ? null : 'Description is required',
    location: location ? null : 'Location is required',
    time: time ? null : 'Time is required',
  }
  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage)
  if (hasErrors) {
    return json(errors)
  }

  await createEvent(userId, {
    description,
    location,
    time,
    title,
  })

  return redirect('/home')
}

const NewEvent = () => {
  const errors = useActionData<typeof action>()

  return (
    <div className='h-screen w-screen absolute top-0 left-0 bg-opacity-70 bg-black flex justify-center items-center'>
      <div className='flex flex-col rounded-xl p-10 w-[500px] bg-slate-100'>
        <Form className='flex flex-col' method='post'>
          <Item label='Description' name='description'>
            <Input name='description' />
            {errors?.description && <div>{errors.description}</div>}
          </Item>
          <Item label='location'>
            <Input name='location' />
            {errors?.location && <div>{errors.location}</div>}
          </Item>
          <Item label='time'>
            <Input name='time' />
            {errors?.time && <div>{errors.time}</div>}
          </Item>
          <Item label='title'>
            <Input name='title' />
            {errors?.title && <div>{errors.title}</div>}
          </Item>
          <button type='submit'>Create</button>
          <a href='/home'>Close</a>
        </Form>
      </div>
    </div>
  )
}

export default NewEvent

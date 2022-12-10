import type { ActionArgs } from '@remix-run/node'

export async function action({ request }: ActionArgs) {
  const body = await request.formData()
  console.log(body)
  return null
}

const NewEvent = () => {
  return (
    <div className='h-screen w-screen absolute top-0 left-0 bg-opacity-70 bg-black flex justify-center items-center'>
      <div className='bg-slate-100 p-10'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log(e.target?.name.value)
            console.log(e.target?.description.value)
          }}
          method='post'
        >
          <label htmlFor='name'>asad</label>
          <input name='name' type='text' />
          <label htmlFor='description'>asdsfdf</label>
          <input name='description'></input>
          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default NewEvent

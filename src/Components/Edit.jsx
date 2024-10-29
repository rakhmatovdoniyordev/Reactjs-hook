import React, {useState} from 'react'

const Edit = ({editTodo, task}) => {
    const [text, setText] = useState(task.text)
    const handleSubmit = e =>{
        e.preventDefault()
        editTodo(text, task.id)
        setText("")
        console.log(text, task.id);
    }
  return (
    <form onSubmit={handleSubmit} action="" className='w-full h-12 bg-gray-100 rounded mb-7 shadow-xl'>
                <input value={text} onChange={(e)=> setText(e.target.value)} type="text" className=' outline-none bg-transparent  p-4 w-[80%] h-full text-black rounded' placeholder='Ishlarni yangilash'/>
                {
                    text.trim() && <button className='w-[20%] h-full bg-[#48cae4] rounded text-white active:bg-[#0f0]'>Update</button>
                }
    </form>
  )
}

export default Edit
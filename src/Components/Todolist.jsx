import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from 'react-toastify';
import { Flip } from 'react-toastify';
import Edit from './Edit';

const Todolist = () => {
    const [text, setText] = useState("")
    const [data, setData] = useState([])
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!text.trim()){
            return null
        }
        let date = new Date()
        let newTodos = {
            id: uuidv4(),
            text,
            time: `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`,
            isEditing: false,
        }
        setData([...data, newTodos])
        setText("")
        toast.success("Rejalar ro'yxatiga qo'shildi", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        })
    }
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
        toast.error("Rejalar ro'yxatidan o'chirib tashlandi !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        })
    }
    const editTodo = (id) => {
        setData(data.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
    }
    const editTask = (newTask, id) => {
        setData(data.map(todo => todo.id === id ? {...todo, text: newTask, isEditing: !todo.isEditing} : todo))
        toast.success("Muvaffaqiyatli yangilandi", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        })
    }
  return (
    <>
    <div className="conatiner__person  w-full flex items-start justify-center">
        <div className='w-[600px] h-auto p-7 border-[1px] border-black rounded shadow-2xl bg-white' >
            <form onSubmit={handleSubmit} action="" className='w-full h-12 bg-gray-100 rounded mb-7 shadow-xl border-[1px] border-[#a1a1a1]'>
                <input value={text} onChange={(e)=> setText(e.target.value)} type="text" className=' outline-none bg-transparent  p-4 w-[80%] h-full text-black rounded' placeholder='Qilinishi kerak bolgan ishlar'/>
                {
                    text.trim() && <button className='w-[20%] h-full bg-[#29c8e7] rounded text-white active:bg-[#0f0] font-bold'>Create</button>
                }
            </form>
            <div className='flex flex-col gap-3'>
                {data?.map(item =>(
                    item.isEditing ?
                    (<Edit  editTodo={editTask} task={item} key={item.id}/>) :
                    (
                    <div key={item.id} className='w-full flex justify-between border-[1px] gap-4 border-[#555] items-center p-3 rounded-lg'>
                        <p className='text-[18px]  overflow-y-auto '>{item.text}</p>
                        <div className='flex gap-2 items-center'>
                            <div>
                                <span className='text-[12px]'>
                                    {item.time}
                                </span>
                            </div>
                            <a href="#" className='p-2 bg-[#0f0] rounded border-[1px] border-black' onClick={()=> editTodo(item.id)}><MdEdit/></a>
                            <a href="#" className='p-2 bg-red-500 rounded border-[1px] border-black text-white' onClick={()=> handleDelete(item.id)}><MdDelete/></a>
                        </div>
                    </div>
                    )
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Todolist
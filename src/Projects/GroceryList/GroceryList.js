import React, { useEffect, useState } from 'react'
import './groceryList.css'
import Alert from './Alert'
import List from './List'

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      return (list = JSON.parse(localStorage.getItem('list')));
    } else {
      return [];
    }
  };

const GroceryList = () => {
    const [name, setName] = useState('')
    const [list, setList] = useState(getLocalStorage())
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [alert, setAlert] = useState({show:false, msg: '', type: ''})

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!name){
           showAlert(true, 'danger', 'Please Input Value')
        }else if(name && isEditing){
           setList(list.map((item) =>{
             if(item.id === editId){
                return {...item, title: name}
             }
             return item
           }))
           setName('')
           setIsEditing(false)
           setEditId(null)
           showAlert(true, 'success', 'Item is edited')
        }else{
           showAlert(true, 'success', 'Item is successfully Added')
           const newItem = {id: new Date().getTime().toString(), title: name}
           setList([...list, newItem])
           setName('')
        }
    }

    const showAlert = (show = false, type = '', msg = '') =>{
         setAlert({show, type, msg})
    }

    const clearAll = () =>{
        showAlert(true, 'danger', 'All items are clear')
        setList([])
    }

    const editItem = (id) =>{
        const specificItem = list.find(item => item.id === id)
        setEditId(id)
        setIsEditing(true)
        setName(specificItem.title)
    }

    const deleteItem = (id) =>{
        setList(list.filter(item => item.id !== id))
        showAlert(true, 'danger', 'Item is deleted')
    }

    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

  return (
    <section className='grocery-section'>
        <form className='grocery-form' onSubmit={handleSubmit}>
            {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
            <h2 className='grocery-title'>Grocery List</h2>
            <div className='grocery-form-control'>
                <input type='text' className='grocery-input' placeholder='e.g. eggs' value={name} onChange={(e)=> setName(e.target.value)} />
                <button className='submit-btn'>{isEditing ? 'Edit' : 'Submit'}</button>
            </div>
        </form>
        {list.length > 0 &&(
            <div className='grocery-container'>
                <List items={list} editItem={editItem} deleteItem={deleteItem} />
                <button className='clear-btn' onClick={clearAll}>Clear All</button>
            </div>
        )}
    </section>
  )
}

export default GroceryList
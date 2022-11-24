import React from 'react'
import './menuProduct.css'

const MenuProducts = ({ menus }) => {
  return (
    <main className='menu-container'>
        {menus.map((menu)=>(
                         <div key={menu.id} className='menu-box'>
                            <img src={menu.img} className='menu-img' />
                            <div className='menu-desc-box'>
                               <p className='menu-category'>{menu.category.toUpperCase()}</p>
                               <div className='menu-headline-price'>
                                  <h3>{menu.title.toUpperCase()}</h3>
                                  <p>${menu.price}</p>
                               </div>
                               <p>{menu.desc}</p>
                            </div>
                            <button>Order Now</button>
                         </div>
        ))}
    </main>
  )
}

export default MenuProducts
import React, { useState } from 'react'
import MenuProducts from './MenuProducts'
import Menus from './PaginationFilterData'
import './paginationFilter.css'
import FoodPaginations from './FoodPaginations'
import CategoryButtons from './CategoryButtons'


const allCategories = ['all', ...new Set(Menus.map(menu => menu.category))]

const PaginationFilter = () => {
    const [menus, setMenus] = useState(Menus)
    const [currentPage, setCurrentPage] = useState(1)
    const [foodPerPage, setFoodPerPage] = useState(8)
    const [categories, setCategories] = useState(allCategories)

    const onPageChange = number => setCurrentPage(number)

    const indexOfLastMenu = foodPerPage * currentPage;
    const indexOfFirstMenu = indexOfLastMenu - foodPerPage;
    const menusPerPage = menus.slice(indexOfFirstMenu, indexOfLastMenu);

    const filterCategory = (category) =>{
        if(category === 'all'){
            setMenus(Menus)
            return;
        }

        const newCategory = Menus.filter((menu) => menu.category === category)
        setMenus(newCategory)
    }

  return (
    <div className='pagination-filter-container'>
        <h1 className='select-food-headline'>Selet Food From Here</h1>
        <CategoryButtons categories={categories} filterCategory={filterCategory} />
        <MenuProducts menus={menusPerPage} />
        <FoodPaginations foodPerPage={foodPerPage} totalPage={menus.length} onPageChange={onPageChange} />
    </div>
  )
}

export default PaginationFilter
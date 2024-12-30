import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';

const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('popular.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(item => item.category==='popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <section className='mb-12'>
            <SectionTitle heading="From Our Menu"
            subHeading="Popular Items"
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 w-11/12 mx-auto'>
                {
                    menu.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className='flex justify-center items-center mt-10'>
                <button className='btn btn-outline border-0 border-b-4  hover:bg-slate-600'>View Full  Menu</button>
            </div>
            
        </section>
       
    );
};

export default PopularMenu;
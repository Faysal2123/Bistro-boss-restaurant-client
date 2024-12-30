import React from 'react';

const MenuItems = ({item}) => {
    const{name,image,price,recipe}=item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px] border-2 border-slate-300' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItems;
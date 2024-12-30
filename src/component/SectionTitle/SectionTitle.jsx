import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-3/12 md:my-8 my-4'>
            <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
            <h3 className='lg:text-4xl text-3xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;
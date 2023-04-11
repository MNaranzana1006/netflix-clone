import React from 'react'

interface MobileMenuProps {
    visible: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if(!visible) return null;
    return (
        <div className='absolute top-8 left-0 bg-black w-56 py-5 border-2 border-gray-800'>
            <div className='flex flex-col gap-4 w-full'>
                <div className='text-white text-center hover:underline'>
                    Home
                </div>
                <div className='text-white text-center hover:underline'>
                    Series
                </div>
                <div className='text-white text-center hover:underline'>
                    Films
                </div>
                <div className='text-white text-center hover:underline'>
                    New & Popular
                </div>
                <div className='text-white text-center hover:underline'>
                    My list
                </div>
                <div className='text-white text-center hover:underline'>
                    Browse by language
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
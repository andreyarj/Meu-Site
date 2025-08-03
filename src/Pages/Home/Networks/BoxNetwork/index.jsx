import React from 'react';

function BoxNetwork({Icon ,Title}) {
    return (
        <>
        <div className='flex flex-col flex-nowrap items-start justify-start gap-[10px] h-[110px] w-[160px] p-[15px] bg-[length:100%] hover:bg-[length:800%] bg-gradient-to-br dark:from-slate from-white dark:via-slatedark  via-gray dark:to-slatedark to-gray rounded-[10px]'>
                        
            <Icon className='text-skydark text-[30px]'/>
        
            <h1 className='w-full h-auto font-Stretch bg-gradient-to-r from-skydark to-sky bg-clip-text text-transparent text-[16px]'>{Title}</h1>
                    
        </div>
        </>
    );
}

export default BoxNetwork;
import React from 'react';

function BoxProject({Title, Paragraph}) {
    return (
        <>
        <div className='snap-start flex flex-col flex-nowrap items-start justify-start gap-[10px] h-[180px] min-w-[260px] p-[15px] bg-[length:100%] hover:bg-[length:800%] bg-gradient-to-br dark:from-slate from-white dark:via-slatedark  via-gray dark:to-slatedark to-gray rounded-[10px]'>
                        
            <h1 className='w-full h-auto font-Stretch bg-gradient-to-r from-skydark to-sky bg-clip-text text-transparent text-[16px]'>{Title}</h1>
        
            <p className='w-full h-full font-Stara dark:text-white text-graydark text-[12px]'>{Paragraph}</p>
                    
            <button type="submit" className='bg-[length:100%] hover:bg-[length:800%] bg-gradient-to-r from-skydark to-sky font-Stara text-white text-[12px] px-[20px] py-[10px] rounded-[100px] shadow-lg hover:shadow-2xl'>Visualizar</button>
        
        </div>
        </>
    );
}

export default BoxProject;
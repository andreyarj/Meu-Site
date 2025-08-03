import React from 'react';

function BoxKnowledge({Icon, Title, Paragraph}) {
    return (
        <>
        <div className='flex flex-col flex-nowrap items-start justify-start gap-[10px] h-[180px] 460:h-[200px] w-[260px] 460:w-[200px] p-[15px] bg-[length:100%] hover:bg-[length:800%] bg-gradient-to-br dark:from-slatedark from-gray dark:via-slate  via-white dark:to-slate to-white rounded-[10px]'>
                        
            <Icon className='text-skydark text-[25px]'/>
        
            <h1 className='w-full h-auto font-Stretch dark:text-white text-graydark text-[16px]'>{Title}</h1>
        
            <p className='w-full h-auto font-Stara dark:text-white text-graydark text-[12px]'>{Paragraph}</p>
                    
        </div>
        </>
    );
}

export default BoxKnowledge;
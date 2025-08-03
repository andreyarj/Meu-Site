import React from 'react';

import Logo from '../Logo';
import ButtonToTalk from '../ButtonToTalk';

function Header() {
    return (
        <>
        <header className='flex flex-row flex-nowrap items-center justify-between w-full h-[100px] dark:bg-slatedark bg-gray px-[20px]'>
            
            <Logo />

            <ButtonToTalk />

        </header>
        </>
    );
}

export default Header;
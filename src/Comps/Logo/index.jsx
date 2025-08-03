import React from 'react';

import LogoImagem from './../../img/Logo.png';

function Logo() {
    return (
        <>
        <img src={LogoImagem} alt='Logo' className='w-[60px] h-auto'></img>
        </>
    );
}

export default Logo;
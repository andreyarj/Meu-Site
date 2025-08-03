import React from 'react';

import Logo from './../Logo/index';

function Footer() {
    return (
        <>
        <footer className='flex flex-row flex-wrap items-start justify-start gap-[15px] w-full h-auto dark:bg-slatedark bg-gray px-[20px] py-[30px]'>

            <ul className='flex flex-col flex-nowrap items-center justify-center gap-[5px] w-[150px] h-auto'>
                <li className='w-full h-auto font-Stretch bg-gradient-to-r from-skydark to-sky bg-clip-text text-transparent text-[16px] text-left'>Contatos</li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'>yerdna.arj@gmail.com</li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'>11 95487-9771</li>
            </ul>

            <ul className='flex flex-col flex-nowrap items-center justify-center gap-[5px] w-[150px] h-auto'>
                <li className='w-full h-auto font-Stretch bg-gradient-to-r from-skydark to-sky bg-clip-text text-transparent text-[16px] text-left'>Siga</li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'>WhatsApp</li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'>Instagram</li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'>Facebook</li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'>LinkedIn</li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'>Email</li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'>Git Hub</li>
            </ul>

            <h1 className='w-[350px] h-auto font-Stretch bg-gradient-to-r from-skydark to-sky bg-clip-text text-transparent text-[16px] text-left'>"Criando Sonhos e Realizando Desejos."</h1>

            <Logo />

        </footer>
        </>
    );
}

export default Footer;
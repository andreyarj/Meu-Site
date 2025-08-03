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
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'><a href="https://wa.me/5511954879771?text=Ol%C3%A1%2C%20Gostaria%20de%20um%20or%C3%A7amento" target='_blank'>WhatsApp</a></li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'><a href="https://instagram.com/yerdna.arj" target='_blank'>Instagram</a></li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'><a href="https://www.facebook.com/share/1GMJW3ckjb/?mibextid=qi2Omg" target='_blank'>Facebook</a></li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'><a href="https://www.linkedin.com/in/andrey-araujo-8724992a7" target='_blank'>LinkedIn</a></li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'><a href="mailto:yerdna.arj@gmail.com" target='_blank'>EMail</a></li>
                <li className='w-full h-auto font-Stara dark:text-white text-graydark text-left text-[12px]'><a href="https://github.com/andreyarj" target='_blank'>Git Hub</a></li>
            </ul>

            <h1 className='w-[350px] h-auto font-Stretch bg-gradient-to-r from-skydark to-sky bg-clip-text text-transparent text-[16px] text-left'>"Criando Sonhos e Realizando Desejos."</h1>

            <Logo />

        </footer>
        </>
    );
}

export default Footer;
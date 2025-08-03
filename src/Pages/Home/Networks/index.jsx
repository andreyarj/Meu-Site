import React from 'react';

import { BiSupport } from 'react-icons/bi';
import { AiOutlineWhatsApp , AiOutlineInstagram } from 'react-icons/ai';
import { LiaFacebook } from 'react-icons/lia';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdOutlineMailOutline } from 'react-icons/md';
import { ImGithub } from 'react-icons/im';

import BoxNetwork from './BoxNetwork';

function Networks() {
    return (
        <>
        <section id='Network' className='flex flex-col flex-nowrap items-center justify-center gap-[15px] w-full h-auto px-[20px] py-[30px] dark:bg-slate bg-white'>

            <div className='flex flex-row flex-nowrap items-center justify-center gap-[15px] w-full h-auto'>

                <button className='bg-[length:100%] hover:bg-[length:800%] bg-gradient-to-br dark:from-slate from-white dark:via-slatedark  via-gray dark:to-slatedark to-gray p-[24px] rounded-[15px]'>

                    <BiSupport className='text-[28px] text-skydark'/>

                </button>

                <div className='flex flex-col flex-nowrap items-center justify-center gap-[5px] w-full h-auto'>

                    <h1 className='w-full h-auto font-Stretch bg-gradient-to-r from-skydark to-sky bg-clip-text text-transparent text-[16px]'>Ola Web Amigo!</h1>
                    
                    <p className='w-full h-auto font-Stara text-[12px] dark:text-white text-graydark'>Contate me para iniciar seu projeto, Juntos encontraremos o seu melhor perfil, Conecte se e Experimente.</p>

                </div>

            </div>

            <div className='flex flex-row flex-wrap items-center justify-center gap-[15px] w-full h-auto'>

                <BoxNetwork Icon={AiOutlineWhatsApp} Title='WhatsApp'/>

                <BoxNetwork Icon={AiOutlineInstagram} Title='Instagram'/>

                <BoxNetwork Icon={LiaFacebook} Title='Facebook'/>

                <BoxNetwork Icon={GrLinkedinOption} Title='LinkedIn'/>

                <BoxNetwork Icon={MdOutlineMailOutline} Title='Email'/>

                <BoxNetwork Icon={ImGithub} Title='Git Hub'/>

            </div>

        </section>
        </>
    );
}

export default Networks;
import React from 'react';

import ButtonToTalk from '../../../Comps/ButtonToTalk';

import { ReactTyped } from "react-typed";

function About() {
    return (
        <>
        <section id='About' className='w-full h-auto dark:bg-slate bg-white'>

            <main className='flex flex-col flex-nowrap items-center justify-items-center gap-[15px] px-[20px] py-[30px] dark:bg-slatedark bg-gray rounded-b-[30px]'>
                
                <h1 className='w-full h-auto font-Stretch text-center dark:text-white text-graydark text-[24px]'>Eu Sou <span className='bg-gradient-to-r from-skydark to-sky bg-clip-text text-transparent'><ReactTyped strings={["Andrey","Desenvolvedor Web","UI e UX Designer"]} typeSpeed={140} backSpeed={70} backDelay={1500} loop /></span></h1>

                <p className='w-full h-auto font-Stara text-[12px] text-center dark:text-white text-graydark'>Desenvolvo e Crio sites e interfaces modernas, Cada detalhe, Desde a Responsividade até a Cor e Fonte do seu projeto é pensada e planejada, Venha começar sua história, Inicie sua jornada, Dê um boost no seu projeto!</p>
            
                <div className='flex flex-row flex-nowrap items-center justify-center gap-[15px] w-full h-auto'>

                    <ButtonToTalk />

                    <a href='#Projects' className='bg-[length:100%] hover:bg-[length:800%] bg-gradient-to-r dark:from-slate from-white dark:to-slatedark to-gray font-Stara dark:text-white text-graydark text-[16px] px-[20px] py-[10px] rounded-[100px] shadow-lg hover:shadow-2xl'>Ver Projetos</a>

                </div>
                
            </main>

        </section>
        </>
    );
}

export default About;
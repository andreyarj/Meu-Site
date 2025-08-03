import React from 'react';

import { GrPersonalComputer } from 'react-icons/gr';
import { BiCodeAlt } from 'react-icons/bi';
import { MdAnimation } from 'react-icons/md';
import { BiSolidVector } from 'react-icons/bi';


import BoxService from './BoxService';

function Services() {
    return (
        <>
        <section id='Services' className='flex flex-col flex-nowrap items-center justify-center gap-[15px] w-full h-auto px-[20px] py-[30px] dark:bg-slate bg-white rounded-b-[30px]'>

            <h1 className='w-full h-auto bg-gradient-to-r from-skydark to-sky bg-clip-text text-transparent font-Stretch text-[24px] text-left'>Serviços</h1>
            
            <div className='flex flex-row flex-wrap items-center justify-center gap-[15px]'>

                <BoxService Icon={GrPersonalComputer} Title='Design Responsivo' Paragraph='Seu site com o Melhor UI Design, Adaptado para todos os Modos e Acessível.'/>

                <BoxService Icon={BiSolidVector} Title='Design UI' Paragraph='Interfaces criadas para facilitar a navegação, Com layouts limpos e bem estruturados e tornam a interação simples e eficiente.'/>

                <BoxService Icon={MdAnimation} Title='Interações' Paragraph='Animações que dão vida ao design, Tornando a navegação mais dinâmica, Interativa e prazerosa para seus usuários.'/>

                <BoxService Icon={BiCodeAlt} Title='Código Limpo' Paragraph='Desenvolvimento organizado e escalável para garantir qualidade e facilidade de manutenção.'/>

            </div>

        </section>
        </>
    );
}

export default Services;


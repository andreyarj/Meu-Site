import React from 'react';
import BoxProject from './BoxProject';

function Projects() {
    return (
        <>
        <section className='flex flex-col flex-nowrap items-center justify-center gap-[15px] w-full h-auto py-[30px] dark:bg-slate bg-white rounded-b-[30px]'>

            <h1 className='w-full h-auto bg-gradient-to-r from-skydark to-sky bg-clip-text text-transparent font-Stretch text-[24px] text-left px-[20px]'>Projetos</h1>

            <div className='snap-proximity snap-x overflow-x-scroll scroll-pl-[20px] flex flex-row flex-nowrap justify-start items-center gap-[20px] w-full h-auto px-[20px]'>

                <BoxProject Title='Levaê' Paragraph='Uma empresa mudança, Toda sua identidade criada para compor experiência.'/>

                <BoxProject Title='Em Breve' Paragraph='Essa descrição estará disponível em breve.'/>

                <BoxProject Title='Em Breve' Paragraph='Essa descrição estará disponível em breve.'/>

            </div>

        </section>
        </>
    );
}

export default Projects;
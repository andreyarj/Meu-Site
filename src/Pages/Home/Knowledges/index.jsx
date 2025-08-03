import React from 'react';

import BoxKnowledge from './BoxKnowledge';

import { BiLogoTailwindCss , BiLogoCss3} from 'react-icons/bi';
import { RiReactjsLine } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';

function Knowledges() {
    return (
        <>
        <section id='Knowledges' className='w-full h-auto dark:bg-slate bg-white'>

            <main className='flex flex-col flex-nowrap items-center justify-center gap-[15px] w-full h-auto px-[20px] py-[30px] dark:bg-slatedark bg-gray rounded-b-[30px]'>

                <h1 className='w-full h-auto bg-gradient-to-r from-skydark to-sky bg-clip-text text-transparent font-Stretch text-[24px] text-left'>Conhecimentos</h1>

                <div className='flex flex-row flex-wrap items-center justify-center gap-[15px]'>

                    <BoxKnowledge Icon={BiLogoTailwindCss} Title='Tailwind Css' Paragraph='Meu Framework Css preferido, Me acompanha geralmente na maioria dos projetos.'/>
                
                    <BoxKnowledge Icon={RiReactjsLine} Title='React Js' Paragraph='o Framework que mais uso, Sua acessibilidade me permite ter mais desempenho.'/>

                    <BoxKnowledge Icon={BiLogoCss3} Title='Css' Paragraph='Possuo conhecimento em Css, Uso para dar vida aos meus projetos webs.'/>

                    <BoxKnowledge Icon={IoLogoJavascript} Title='Javascript' Paragraph='Possuo conhecimento em Javascript, Geralmente usada em alguns projetos.'/>

                    <BoxKnowledge Icon={AiFillHtml5} Title='HTML' Paragraph='Possuo conhecimento em HTML Semântico, Trabalho respeitando toda sua hierarquia.'/>

                </div>

            </main>

        </section>
        </>
    );
}

export default Knowledges;
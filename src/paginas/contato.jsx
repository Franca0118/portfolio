import React, { useEffect, useState } from "react";

import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaGithub, FaDiscord, FaLinkedin  } from "react-icons/fa6";



export default ()=>{
    // CODIGO HEADER E SEUS BOTOES
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    function togleInglish() {
        document.querySelector("#btnportandenglish").classList.toggle("english")
        document.querySelector("body").classList.toggle("english2")
    }
    
    function escuroClaro() {
        if (document.querySelector("html").classList.toString().includes('black')) {
            return (
                <motion.input className="blackAndWhite" type="checkbox" defaultChecked onClick={() => {
                    document.querySelector("html").classList.toggle('black')
                }} layout transition={spring} />
            )
        } else {
            return (
                <motion.input className="blackAndWhite" type="checkbox" onClick={() => {
                    document.querySelector("html").classList.toggle('black')
                }} layout transition={spring} />
            )
        }
    }
    
    let definirBotoesHeader = () => {
        if (document.querySelector("body").classList.toString().includes("english2")) {
    
            setHeader(<>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/sobre'><h3>About</h3></Link>
                <Link to='/conhecimentos'><h3>Learns</h3></Link>
                <Link to='/projetos'><h3>Projects</h3></Link>
                <Link to='/contato'><h3>Contact</h3></Link></>)
        } else {
            setHeader(<>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/sobre'><h3>Sobre</h3></Link>
                <Link to='/conhecimentos'><h3>Conhecimentos</h3></Link>
                <Link to='/projetos'><h3>Projetos</h3></Link>
                <Link to='/contato'><h3>Contato</h3></Link></>)
        }
    }
    
    let [headerTraducao, setHeader] = useState(() => {
        if (document.querySelector("body").classList.toString().includes("english2")) {
            return <>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/sobre'><h3>About</h3></Link>
                <Link to='/conhecimentos'><h3>Learns</h3></Link>
                <Link to='/projetos'><h3>Projects</h3></Link>
                <Link to='/contato'><h3>Contact</h3></Link></>
        } else {
            return <>
                <Link to='/'><h3>Home</h3></Link>
                <Link to='/sobre'><h3>Sobre</h3></Link>
                <Link to='/conhecimentos'><h3>Conhecimentos</h3></Link>
                <Link to='/projetos'><h3>Projetos</h3></Link>
                <Link to='/contato'><h3>Contato</h3></Link></>
        }
    })
    
    
    
    
    let header = () => {
        return (
            <header id="meuHeader">
                <div id='meuNomeHeader'>
                    <a href="/"><h3>João Victor França</h3></a>
                </div>
                <div>
                    {escuroClaro()}
                    <motion.input className="PortAndEnglish" id="btnportandenglish" type="checkbox" onClick={() => {
                        togleInglish()
                        definirBotoesHeader()
                        definirATraducaoDaPagina()
                    }} layout transition={spring} />
                    {headerTraducao}
    
                </div>
            </header>
        )
    }
    // FIM CODIGO HEADER



    let [paginatraducao, settraducao] = useState()
    let definirATraducaoDaPagina = () => {
        if (document.querySelector("body").classList.toString().includes("english2")) {

            settraducao(<>
               <motion.h1 initial={{x: -1000}}
                animate={{x: 0}}
                transition={{ ease: "linear",duration: .5 }}>Contact me:</motion.h1>
            </>)
        } else {
            settraducao(
                <>
                    <motion.h1 initial={{x: -1000}}
                animate={{x: 0}}
                transition={{ ease: "linear",duration: .5 }}>Entre em contato comigo:</motion.h1>
                </>)
        }
    }
    
    useEffect(()=>{
        // definir como os botoes vao ficar de acordo com a traducao da pagina
        if (document.querySelector("body").classList.toString().includes("english2")) {
            document.querySelector("#btnportandenglish").classList.toggle("english")
            document.querySelector("#btnportandenglish").checked = true
        }
        definirBotoesHeader()
        definirATraducaoDaPagina()
    },[])
    return (
        <>
            {header()}

            <section>

                
                {paginatraducao}
                <motion.div className="icones"
                initial={{x: 1000}}
                animate={{x: 0}}
                transition={{ ease: "linear",duration: .5 }} >
                    <a href="mailto:jvrafael18@gmail.com" target="_blank"> <SiGmail className="icon" /></a>
                    <a href="https://wa.me/31973170242" target="_blank"><FaWhatsapp className="icon" /></a>
                    <a href="https://www.instagram.com/jaofranca_/" target="_blank"><FaInstagram className="icon" /></a>
                    <a href="https://github.com/Franca0118" target="_blank"><FaGithub className="icon" /></a>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-fran%C3%A7a-a6569b240/" target="_blank"><FaLinkedin  className="icon" /></a>
                </motion.div>
            </section>




        </>
    )
}


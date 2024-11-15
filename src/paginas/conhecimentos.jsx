import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

import { DiAndroid, DiApple, DiCss3, DiJsBadge, DiNpm, DiGithubBadge } from "react-icons/di";
import { FaReact, FaPython, FaPhp, FaHtml5 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoHardwareChip } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export default () => {
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
    let todosIcones = () => {
        return <>
        <motion.div className="icones"
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: .5 }} >
                    <DiAndroid className="icon" />
                    <SiTypescript className="icon" />
                    <GrMysql className="icon" />
                    <DiNpm className="icon" />
                    <DiGithubBadge className="icon" />
                    <FaReact className="icon" />

                </motion.div>

                <motion.div className="icones"
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: .5 }} >
                    <FaPython className="icon" />
                    <FaPhp className="icon" />
                    <FaHtml5 className="icon" />
                    <DiCss3 className="icon" />
                    <DiJsBadge className="icon" />
                    <IoHardwareChip className="icon" />
                </motion.div></>
    }
    let [paginatraducao, settraducao] = useState()
    let definirATraducaoDaPagina = () => {
        if (document.querySelector("body").classList.toString().includes("english2")) {
            settraducao(
                <>
                    <h1>My knowledge</h1>
                    {todosIcones()}
                    <Link to='/projetos'><button>Projects <ion-icon name="arrow-forward-outline"></ion-icon> </button></Link>
                </>
            )
            
        } else {
            settraducao(
                
                <>
                <h1>Meus Conhecimentos</h1>
                {todosIcones()}
                <Link to='/projetos'><button>Projetos <ion-icon name="arrow-forward-outline"></ion-icon> </button></Link>
            </>
            )
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

                
               

            </section>




        </>
    )
}



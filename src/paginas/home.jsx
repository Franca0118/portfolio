

import React, { useEffect, useState, UseRef } from "react";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";



export default () => {
    let respAux = true
    // CODIGO HEADER E SEUS BOTOES
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    }

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
    
    

    let [paginatraducao, settraducao] = useState()
    let definirATraducaoDaPagina = () => {
        if (document.querySelector("body").classList.toString().includes("english2")) {

            settraducao(<>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}>
                    <h3>hi, i'm</h3>
                    <h1>João Victor</h1>
                    <h2>WEB / MOBILE Developer</h2>
                    <Link to='/sobre'><button>ABOUT ME<ion-icon name="arrow-forward-outline"></ion-icon></button></Link>
                </motion.div>
            </>)
        } else {
            settraducao(
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}>
                        <h3>Olá, sou</h3>
                        <h1>João Victor</h1>
                        <h2>Desenvolvedor WEB / MOBILE</h2>
                        <Link to='/sobre'><button>SOBRE MIM <ion-icon name="arrow-forward-outline"></ion-icon></button></Link>
                    </motion.div>
                </>)
        }
    }
    
    
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
            <div id="responsividade" onClick={()=>{
                if (respAux)
                {
                    document.querySelector("#meuHeader").style.marginLeft = "10px"
                    respAux = false
                } else {
                    document.querySelector("#meuHeader").style.marginLeft = "-100%"
                    respAux = true
                }
            }}><GiHamburgerMenu id="iconres"/></div>
            {header()}
            <main>
                {paginatraducao}
                <motion.img
                    initial={{ y: -700 }}
                    animate={{ y: 0 }}
                    transition={{ duration: .5 }} src="./image.png" alt="" />
            </main>

        </>
    )
}


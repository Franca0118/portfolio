import React, { useEffect, useState } from 'react'
import { backOut, motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";
import { DiGithubBadge } from "react-icons/di";
import { Link } from 'react-router-dom'
import { tr } from 'framer-motion/client';


export default () => {
    let respAux = true

   
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
                <motion.h1
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: .2 }} id='projetosTitulo'>My Projects</motion.h1>
            </>)

            setBotaoFinal(
                <>
                <Link to='/contato'><motion.button
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: .2 }}>Contact me<ion-icon name="arrow-forward-outline"></ion-icon></motion.button></Link></>
            )
        } else {
            settraducao(
                <>
                    <motion.h1
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }}
                        transition={{ duration: .2 }} id='projetosTitulo'>Meus Projetos</motion.h1>
                </>)

            setBotaoFinal(<>
            <Link to='/contato'><motion.button
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: .2 }}>ENTRE EM CONTATO<ion-icon name="arrow-forward-outline"></ion-icon></motion.button></Link></>)
        }
    }

    const [Meurepositorio, setMeurepositorio] = useState([])
    const [addBotaoFInala , setBotaoFinal] = useState()
    useEffect(()=>{
        // definir como os botoes vao ficar de acordo com a traducao da pagina
        if (document.querySelector("body").classList.toString().includes("english2")) {
            document.querySelector("#btnportandenglish").classList.toggle("english")
            document.querySelector("#btnportandenglish").checked = true
        }
        definirBotoesHeader()
        definirATraducaoDaPagina()

        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/Franca0118/repos')
            const data = await response.json()
            setMeurepositorio(data)
        }
        buscarRepositorios()
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
            <div id='meuscards'>
            {paginatraducao}
                {
                    Meurepositorio.length > 0 ?
                        Meurepositorio.map((projeto, i) => {
                            if (i % 2 == 0) {
                                return (
                                    <a href={"https://github.com/" + projeto.full_name}>
                                        <motion.div className='card'
                                            initial={{ x: -2000 }}
                                            animate={{ x: 0 }}
                                            transition={{ duration: .5 }}>

                                            <span>
                                                <img src={projeto.owner.avatar_url} />

                                            </span>
                                            <h2>{projeto.name}</h2>

                                        </motion.div>
                                    </a>
                                )
                            } else {
                                return (
                                    <a href={"https://github.com/" + projeto.full_name}>
                                        <motion.div className='card'
                                            initial={{ x: 2000 }}
                                            animate={{ x: 0 }}
                                            transition={{ duration: .5 }}>

                                            <span>
                                                <img src={projeto.owner.avatar_url} />

                                            </span>
                                            <h2>{projeto.name}</h2>

                                        </motion.div>
                                    </a>
                                )
                            }
                        }) :
                        <h1>...</h1>
                }
                {addBotaoFInala}
            </div>
        </>
    )
}



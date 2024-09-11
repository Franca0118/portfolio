import React, {useState, useEffect} from "react";

import { Link } from 'react-router-dom'
import { motion } from "framer-motion"




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

let header = () => {
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

    useEffect(() => {
        if (document.querySelector("body").classList.toString().includes("english2")) {
            document.querySelector("#btnportandenglish").classList.toggle("english")
            document.querySelector("#btnportandenglish").checked = true
        }
        rederizarBotoesHeader()
        paginaAtualTraducao()

    }, [])

    let rederizarBotoesHeader = () => {
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
    return (
        <header id="meuHeader">
            <div id='meuNomeHeader'>
                <a href="/"><h3>João Victor França</h3></a>
            </div>
            <div>
                {escuroClaro()}
                <motion.input className="PortAndEnglish" id="btnportandenglish" type="checkbox" onClick={() => {
                    togleInglish()
                    rederizarBotoesHeader()
                    paginaAtualTraducao()
                }} layout transition={spring} />
                {headerTraducao}

            </div>
        </header>
    )
}
// FIM CODIGO HEADER







    let [paginatraducao, settraducao] = useState()
    let paginaAtualTraducao = () => {
        if (document.querySelector("body").classList.toString().includes("english2")) {
            settraducao(
                <>
                    <nav>

                        <h3>
                            <span><h1>About me</h1></span>
                            <img src="eu.png" alt="" />
                            i'am 17 years old, i studing progaming at 2 years in my school by name is cotmeig
                            i'am 17 years old, i studing progaming at 2 years in my school by name is cotmeig
                            i'am 17 years old, i studing progaming at 2 years in my school by name is cotmeig <br>
                            </br>
                            i'am 17 years old, i studing progaming at 2 years in my school by name is cotmeig
                            i'am 17 years old, i studing progaming at 2 years in my school by name is cotmeig
                            i'am 17 years old, i studing progaming at 2 years in my school by name is cotmeig
                            <br />
                            Texto temporario
                            



                            <Link to='/conhecimentos'> <button>know <ion-icon name="arrow-forward-outline"></ion-icon> </button></Link>
                        </h3>

                        

                    </nav>
                </>
            )

        } else {
            settraducao(

                <>
                    <nav>

                        <h3>
                            <span><h1>Sobre mim</h1></span>
                            <img src="eu.png" alt="" />
                            Tenho 17 anos, estou finalizando meu ensino meio conjunto ao cotmeig,
                            e estuou em busca da minha primeira experiencia no mercado de trabalho, com o objetivo de
                            aprofundar meus conhecimentos e colaborar com a empresa -
                            Texto temporario



                           



                            <Link to='/conhecimentos'> <button>Conhecimentos <ion-icon name="arrow-forward-outline"></ion-icon> </button></Link>
                        </h3>

                       

                    </nav>
                </>
            )
        }
    }

    return (
        <>
            {header()}
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }} >
                {paginatraducao}

            </motion.main>
            

        </>
    )
}


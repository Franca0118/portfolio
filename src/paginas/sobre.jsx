import React, {useState, useEffect} from "react";

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
            <Link to='/conhecimentos'><h3>Knowledge</h3></Link>
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
            settraducao(
                <>
                    <nav>
                        <h3>
                            <span><h1>About me</h1></span>
                            <img src="/eu.png" alt="" />
                            I am currently studying Software Engineering at PUC Minas (1st semester), 
                            and between 2022 and 2024, I completed my technical high school at Cotemig, 
                            where I developed an excellent foundation for college and internships. I am 
                            passionate about technology and always looking to expand my knowledge and 
                            improve my skills in the area. At the moment, I am dedicated to learning 
                            different programming languages and development concepts, along with the 
                            internship and college.
                            <Link to='/conhecimentos'> <button>Knowledge <ion-icon name="arrow-forward-outline"></ion-icon> </button></Link>
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
                            <img src="./eu.png" alt="" />
                            Atualmente, estou cursando Engenharia de Software na PUC Minas (1º período)
                            e, entre 2022 e 2024, concluí o ensino médio técnico no Cotemig, onde desenvolvi 
                            uma excelente base para a faculdade e os estágios. Sou apaixonado por tecnologia 
                            e estou sempre em busca de expandir meus conhecimentos e aprimorar minhas 
                            habilidades na área. No momento, dedico-me ao aprendizado de diferentes 
                            linguagens de programação e conceitos de desenvolvimento, conjunto o 
                            estágio e faculdade.
                            <Link to='/conhecimentos'> <button>Conhecimentos <ion-icon name="arrow-forward-outline"></ion-icon> </button></Link>
                        </h3>
                    </nav>
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
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }} >
                {paginatraducao}

            </motion.main>
            

        </>
    )
}


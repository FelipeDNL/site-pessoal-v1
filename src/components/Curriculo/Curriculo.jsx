import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Curriculo = () => {
    return (
        <div className="bg-light border border-2 rounded" style={{ padding: '4%', width: '980px', }}>
            <h4><ins>Formação Academica</ins></h4>
            <ul>
                <li>De Julho 2022 - Dezembro 2022: Assistente de pesquisa, “Dinamizando a Aprendizagem de Programação de Computadores usando Desenvolvimento Orientado a Testes e problemas criados pelos próprios alunos”, aprovado no edital 21/2022/PROPPI – Didático Pedagógico - Lages.</li>
            </ul>
            <h4><ins>Linguagens e Tecnologias</ins></h4>
            <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Python</li>
                <li>MySQL</li>
                <li>Estrutura de Dados</li>
                <li>Engenharia de Software - Cobertura de Testes - Complexidade Ciclomática - Métricas de Software</li>
                <li>Padrões de Design</li>
                <li>Orientação a Objetos</li>
                <li>Banco de Dados</li>
            </ul>
            <h4><ins>Habilidade Extras</ins></h4>
            <ul>
                <li>Inglês fluente</li>
                <li>Habilidades Interpessoais</li>
                <li>Inteligência Artificial - Algoritmos de Busca - Sistemas Baseados em Conhecimento - Aprendizagem de Máquina</li>
                <li>Sistemas Distribuídos</li>
            </ul>

            <div>
                <a href="./Felipe Davi CV" download="How-to-download-file.pdf">
                    <button>Baixar Currículo</button>
                </a>
            </div>

        </div>

    )
}

export default Curriculo
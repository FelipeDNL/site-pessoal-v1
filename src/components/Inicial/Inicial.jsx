import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Inicial = () => {
    return (
        <div className="bg-light border border-2 rounded" style={{ padding: '4%', width: '980px', height: '600px'}}>
            <h2>Olá, meu nome é Felipe!</h2>
            <p>Sou um aluno de graduação em Ciência da Computação no IFSC - Campus Lages. Tenho experiência em programação e resolução de problemas, além de uma sólida compreensão dos fundamentos da ciência da computação. 
                Estou procurando por oportunidades para aplicar minhas habilidades e conhecimentos em um ambiente de trabalho desafiador e colaborativo.
            </p>
            <p>Abaixo se encontra alguns destaques do meu conhecimento, para uma compreensão mais profundada você pode verificar a aba 'Currículo'. </p>

            <div class="row">
                <div className="d-flex justify-content-center gap-2">
                    <img src="./Java-Dark.svg" class="img-fluid" style={{ height: '30%'}} />
                    <img src="./JavaScript.svg" class="img-fluid" style={{ height: '30%'}}/>
                    <img src="./React-Dark.svg" class="img-fluid" style={{ height: '30%'}}/>
                    <img src="./NodeJS-Dark.svg" class="img-fluid" style={{ height: '30%'}}/>
                    <img src="./HTML.svg" class="img-fluid" style={{ height: '30%'}}/>
                    <img src="./Figma-Dark.svg" class="img-fluid" style={{ height: '30%'}}/>
                </div>
            </div>
        </div>
    )
}

export default Inicial
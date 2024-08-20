import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const Portifolio = () => {
    return (

        <div className="bg-light border border-2 rounded" style={{ padding: '4%', width: '980px', height: '600px' }}>

            <div style={{marginBottom: '2%'}}>
                <h4>Portifólio</h4>
                <h>Aqui é apresentado alguns dos meus com projetos pessoais e academicos hospedados no github, com o código aberto.</h>
            </div>

            <div className="d-flex justify-content-center gap-4" style={{marginBottom: '2%'}}>

                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Chat Multicast Criptografado</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Java</Card.Subtitle>
                        <Card.Text>
                            Chat multicast criptografado implementado em Java.
                        </Card.Text>
                        <Card.Link href="https://github.com/FelipeDNL/Chat_Multicast_Criptografado" target='_blank'>Link para Repositório</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Aplicativo Com React e Firebase</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React</Card.Subtitle>
                        <Card.Text>
                            Aplicativo simples de registro de contas feito em React com Firebase como banco de dados.
                        </Card.Text>
                        <Card.Link href="https://github.com/FelipeDNL/Trabalho2_React_Firebase" target='_blank'>Link para Repositório</Card.Link>
                    </Card.Body>
                </Card>

            </div>

            <div className="d-flex justify-content-center gap-4">

                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Sistema de Gerencimento de Registros</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Java - MySQL</Card.Subtitle>
                        <Card.Text>
                            Sitema de gerencimento de registros com conexão em um banco de dados MySQL.
                        </Card.Text>
                        <Card.Link href="https://github.com/FelipeDNL/Sistema_de_Gerenciamento_de_Registros" target='_blank'>Link para Repositório</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Esse Site</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React</Card.Subtitle>
                        <Card.Text>
                            Site pessoal de currículo e portifólio feito em react e hospedado usando gh-pages.
                        </Card.Text>
                        <Card.Link href="https://github.com/FelipeDNL/felipednl.github.io" target='_blank'>Link para Repositório</Card.Link>
                    </Card.Body>
                </Card>
                
            </div>

        </div>
    )
}

export default Portifolio
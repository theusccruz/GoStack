import React, { useState, useEffect } from "react";
import Header from "./components/Header";

// import './App.css';
// import backgroundImage from './assets/background.jpg';

import api from "./services/api";

function App() {
    const [projects, setProjects] = useState([]);
    /* 
        Quando o set do useState é acionado ele renderiza o componente 
        novamente, toda vez que a função addProject é executada o array é 
        recriado com um novo valor e assim é possível apresentá-lo 
        atualizado em tela 
     */
    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data)
        });
    }, [])
    /*
        useEffect: o primeiro parâmetro indica qual função será disparada,
        o segundo indica quando ela será disparada. Caso o parametro 2 seja 
        uma variável (ex: [projects]), a função será executada quando a variável 
        for modificada. Caso o 2 parâmetro estiver vazio ([]), a função será 
        executada somente uma vez assim que o componente for mostrado em tela
    */
    const addProject = async () => {
        const response = await api.post('/projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: "Matheus Cruz"
        });

        const project = response.data;
        setProjects([...projects, project]);
    }
    return (
        <>
            {/* 
                usando fragment (<>) para colocar dois 
                elementos sem precisar de uma div em volta deles
            */}
            <Header title=' Projects' />

            {/* <img width={300} src={backgroundImage} alt="Imagem de fundo" />*/}

            <ul>
                {projects.map(project => {
                    return (
                        <li key={project.id}>{project.title}</li>
                    );
                })}
            </ul>
            <button
                type="button"
                onClick={addProject}
            >
                Adicionar projeto
            </button>
        </>
    );
}

export default App;
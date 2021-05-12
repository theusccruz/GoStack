import React, { useState } from "react";
import Header from "./components/Header";

function App() {
    const [projects, setProjects] = useState(['App', 'Front-end web']);
    /* 
        Quando o set do useState é acionado ele renderiza o componente 
        novamente, toda vez que a função addProject é executada o array é 
        recriado com um novo valor e assim é possível apresentá-lo 
        atualizado em tela 
     */
    const addProject = () => {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }
    return (
        <>
            {/* 
                usando fragment (<>) para colocar dois 
                elementos sem precisar de uma div em volta deles
            */}
            <Header title=' Projects' />

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
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
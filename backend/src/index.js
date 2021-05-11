const express = require('express');
const app = express();
const { v4 } = require('uuid'); // módulo uuidv4 está descontinuado

app.use(express.json()); // diz para o express interpretar json

const projects = [];
const logRequests = (req, res, next) => {
    
}

// Routes
app.get('/projects', (req , res) => {
   const { title } = req.query; // pegando query params (?title=BootCamp)

   const result = title
      ? projects.filter(project => project.title.includes(title))
      : projects;

   return res.json(result);
});

app.post('/projects', (req , res) => {
   const { title, owner } = req.body; // pegando request body (enviado via post)
   const project = { id: v4(), title, owner };
   /* Seguda forma de adicionar o id ao project

      const project = req.body;
      project['id'] = v4();
   */

   projects.push(project);
   return res.status('201').json(project);
});

app.put('/projects/:id', (req, res) => {
   const { id } = req.params; // pegando route params (projects/2/)
   const { title, owner } = req.body;

   const projectIndex = projects.findIndex(project => {
       return project.id === id;
   });

   if (projectIndex < 0) {
      return res.status('404').json({ error: 'Not found' });
   } 

   const project = {
      id,
      title,
      owner
   };

   projects[projectIndex] = project;
   return res.json(project);
});

app.delete('/projects/:id', (req, res) => {
   const { id } = req.params;

   const projectIndex = projects.findIndex(project => {
      return project.id === id;
   });
   /* Segunda forma de retornar o id, usando o find()
      const { projectId } = req.params;

      const projectIndex = projects.find(({ id }) => {
         return id === projectId;
   });
   */

   if (projectIndex < 0) {
      return res.status('404').json({ error: 'Not found' });
   }
   
   projects.splice(projectIndex, 1);
   return res.status('204').json();    
})


app.listen(3333, () => {
   console.log("Back-end started 🔥");
}); // escolhe uma porta para o Node
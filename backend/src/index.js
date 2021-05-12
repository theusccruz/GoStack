const express = require('express');
const { v4: uuidv4, validate: uuidValidate } = require('uuid');
//const isUUID = require('is-uuid'); usando o is-uuid
const cors = require('cors');

const app = express();

app.use(cors()); // liberando acesso para qualquer front end
app.use(express.json()); // diz para o express interpretar json

const projects = [];

const logRequests = (req, res, next) => {
   const { method, url } = req;
   const logLabel = `[${method.toUpperCase()}] ${url}`;

   console.log(logLabel);
   return next(); // chama próximo middleware
}
app.use(logRequests);

const validateProjectId = (req, res, next) => {
   const { id } = req.params;
   if (!uuidValidate(id)) {
      return res.status('400').json({ error: 'Invalid project ID' });      
   }
   return next();
}
/* app.use abaixo, colocando o prefixo da rota 
   em que esse middleware será acionado, 
   nesse caso put ou delete 
*/
app.use('/projects/:id', validateProjectId); 

// Routes
app.get('/projects', (req, res) => {
   const { title } = req.query; // pegando query params (?title=BootCamp)

   const result = title
      ? projects.filter(project => project.title.includes(title))
      : projects;

   return res.json(result);
});

app.post('/projects', (req, res) => {
   const { title, owner } = req.body; // pegando request body (enviado via post)
   const project = { id: uuidv4(), title, owner };
   /* Seguda forma de adicionar o id ao project

      const project = req.body;
      project['id'] = uuidv4();
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
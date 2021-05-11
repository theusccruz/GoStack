const express = require('express');
const app = express();
app.use(express.json()); // diz para o express interpretar json

const projects = [];

// Routes
app.get('/projects', (req , res) => {
   const { title, name } = req.query; // pegando query params (?title=BootCamp)
   console.log(title, name);

   return res.json(
      [
         {
            name: name,
            title: title
         },
         'Projeto 1',
         'Projeto 2',
      ]
   );
});

app.post('/projects', (req , res) => {
   const { title, owner } = req.body; // pegando request body (enviado via post)

   return res.json(
      [
         {
            app: title,
            author: owner
         },
         'Projeto 1',
         'Projeto 2',
         'Projeto: 3'
      ]
   );
});

app.put('/projects/:id', (req, res) => {
   const { id } = req.params; // pegando route params (projects/2/)
   console.log(id);

   return res.json(
      [
         {
            idSolicitado: id
         },
         'Projeto 4',
         'Projeto 2',
         'Projeto: 3'
      ]
   );
});

app.delete('/projects/:id', (req, res) => {
   return res.json(
      [
         'Projeto 4',
         'Projeto 2',
      ]
   );    
})


app.listen(3333, () => {
   console.log("Back-end started 🔥");
}); // escolhe uma porta para o Node
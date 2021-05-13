import express from 'express';
import { helloWorld } from "./routes";3
const app = express();

app.get('/', (request, response) => {
    return response.json({
        message: 'server ok'
    });
});

app.listen(3333, () => {
    console.log(`Backend started`);
})


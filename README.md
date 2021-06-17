# GoStack
Bootcamp Rocketseat
<br>
<br>

## Comandos úteis


### React

*Adicionando babel e webpack ao projeto*

```yarn add @babel/core @babel/preset-env babel/preset-react webpack webpack-cli```

*Convertendo arquivo js com babel*

```yarn babel arquivo.js --out-file bundle.js```

*Traz o webpack para o arquivo bundle.js*

```yarn webpack --mode development```

*Executa o webpack server*

```yarn webpack server --mode development```
<br>

### Typescrypt

*Adiciona typescript*

```yarn add typescript -D```

*Gera um arquivo convertido para js*

```yarn tsc arquivo.ts```

*Cria arquivo de configurações para conversão de arquivos ts para js*

```yarn tsc --init```

*Converte todos os arquivos do projeto para js*

```yarn tsc```

*Módulo que funciona como servidor que roda código ts sem precisar converte-lo para js*

```yarn add ts-nove-dev```

*Instala e inicializa o eslint*

```yarn add eslint -D```
```yarn eslint --init```

*Instala o airbnb base no eslint via yarn*

```yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest```

*Módulo que entende as importações de arquivos ts*

```yarn add -D eslint-import-resolver-typescript```

*Instalação do Prettier*

```yarn add prettier eslint-config-prettier eslint-plugin-prettier -D```
<br>

### Docker

*Gera uma imagem no docker a partir do dockerfile*<br>
*É executado dentro da pasta onde o dockerfile está (por isso o uso do "." no final)*

```docker build -t nome_da_imagem .```

*Cria o contêiner a partir da imagem gerada*<br>
*"-p 3333:3333" espelha a porta da máquina local para o contêiner*<br>
*"-d" executa o comando em background, assim o terminal fica liberado*
 
```docker run -p 3333:3333 -d nome_da_imagem```

*Entra no terminal do contêiner*<br>
*"-it" indca que vamos usar o terminal*<br>
*"/bin/bash" comando que queremos executar, ou seja, usar o terminal bash*

```docker container exec -it nome_da_imagem /bin/sh```

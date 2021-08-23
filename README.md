# Upfi

![Imagem inicial da aplicação](/public/inicio.png)
![Formulário da aplicação](/public/form.png)

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React
- TypeScript
- Chakra UI
- React Query
- React Hook Form
- FaunaDB

## Como executar

Clone o projeto e acesse a pasta do mesmo.

```
$ git clone https://github.com/gugavillar/upfi
$ cd upfi
```

Para iniciá-lo, siga os passos abaixo:

```
# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn dev
```

O app estará disponível no seu browser pelo endereço http://localhost:3000.

Para que todo o projeto funcione corretamente é preciso que você cire uma conta no imgBB

- [Criar conta](https://imgbb.com/login)

Crie sua chave da API

- [Criar chave](https://api.imgbb.com/)

Depois desse processo é necessário que você tenha uma conta no FaunaDB e crie um banco de dados novo e uma coleção chamada images, feito isso crie uma API Key

- [Doc Fauna](https://docs.fauna.com/fauna/current/start/index.html)

Agora que você já tem tem as duas API Key você deve adiciona-lás no seu arquivo .env.local com os seguintes valores

```
NEXT_PUBLIC_IMGBB_API_KEY=VALOR_DA_CHAVE_COPIADA
FAUNA_API_KEY=VALOR_DA_CHAVE_COPIADA
```

## 💻 Projeto

O Upfi é um projeto para upload de imagens.

As funcionalidades do projeto são:

- Fazer upload de imagens;
- Salvar imagens dentro de uma coleção no FaunaDB;
- Fazer o envio da imagem para o serviço imgBB;
- Fazer a verificação de preenchimento de formulário com o uso do React Hook Form;
- Carregar imagens com o uso do inifiniteQueries do ReactQuery

Esse projeto tem como objetivo consolidar conhecimentos sobre:

- Uso de API`s;
- Uso da biblioteca ReactQuery;
- Uso da biblioteca React Hook Forms;
- Uso da biblioteca Chakra UI;
  Entre outros.

Esse foi um projeto realizado dentro do Ignite da Rocketseat.

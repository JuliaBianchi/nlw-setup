import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

/**
 * Método HTTP:
 * Get - buscar alguma informação/dados,
 * Post - criar,
 * Put - atualizar,
 * Patch - informação específica de um recurso,
 * Delete - deletar
 * 
 * Navegador só consegue fazer get.
 * 
 * fastify - prisma
 * @prisma-client - dependência pra acessar o banco de dados
 * SQLite - cria um arquivo local de banco de dados e não precisamo subir um local
 * UUID - ID único pra cada informação na aplicação
 * npx prisma studio - interface pra acessar o banco de dados
 * CORS - quais aplicações vão acessar os dados da aplicação backend, importar do FASTIFY
 * 
 * Front-end
 * 
 * Vite
 * esbuild - build de forma automática
 * suporte ao ts, tsx
 * npm create vite@latest - nome ao projeto e seleciona as linguagens
 * npm install - instalar as dependências de desenvolvimento
 * npm run dev - vai indicar o endereço e trazer a página inicial do Vite + React
 * Biblioteca pra construção de interfaces do usuário
 * Componente: reaproveitar / isolar
 *  Propriedade: Uma informação enviada pra modificar um componente visual ou comportamentalmente.
 */

app.get('/habits', async () => {
    const habits = await prisma.habit.findMany()
       
    return habits
    
})

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server Running!")
})
//Recaptulando
console.log('No nível 1, você tem avançado com o personagem Danpro, estou certo?')
console.log('O problema é que aquela história é muito easy, vamos agora para um nível mais Hard Core 😎')
console.log('')

//Meu Personagens Informações
let nome = 'Leonard'
let vida = 100
let classe = 'Guerreiro'
let experiencia = 0
let nivel = 1
let mojo = 0
let fases = 0
let danoArma = 30 // esse dano afeta na vida

//Loja de armas
const megaFight = 90
const boraLuta = 50
const fight = 0

//Inicio / Capitulo 1
console.log('Bem vindo ao Aventura 2.0!')
console.log('---------------------------------------------------------')
console.log('Informações atuais do seu Personagem:')
console.log('Vida:', vida + '| Classe:', classe)
console.log('Nível:', nivel + ' | M:', mojo)
console.log('Fases:', fases + ' | Experiência:', experiencia)
console.log('"M" (Mojo) é a moeda do Aventura, gaste com equipamentos e itens do jogo!')
console.log('')
console.log('Para poder iniciar, você precisa de uma arma, vamos escolher de acordo')
console.log('com a quantidade de Mojo que você possui.....')

if(mojo >= megaFight){
    console.log('Você agora possui a arma Mega Fight!')
    mojo = mojo - megaFight
}else if(mojo >= boraLuta){
    console.log('Agora você possui a arma Bora Luta!')
    mojo = mojo - megaFight
}else if(mojo >= fight){
    console.log('Agora você possui a arma Fight!')
    mojo = mojo - fight
}else{
    console.log('Mojo insuficiente')
}

//Inimigo informações
let inimigo = 'virus'
let vidaInimigo = 100
let poderInimigo = 30
let descricao = 'uma substâcia'
let refer = 'chamado'

console.log('')
console.log('------------------------------------- CAPITULO 1 ---------------------------------------------')
console.log('Você será transportado para Chernobyl e terá a misão de combater os virus deixados pela radiação que')
console.log('tomou conta do local. É claro que é necessário possuir algum mecanismo de defesa, por  isso, te damos')
console.log('de presente um escudo, que te protege contra tudas as coisas e/ou qualquer tipo de dano! Você terá')
console.log('que lutar contra,', descricao,refer, inimigo,', ele possuí', vidaInimigo, 'de vida e', poderInimigo, 'de poder!')

//Luta compensou 100 de mojo
mojo += 100
//1 Fase completa
fases += 1
//Mais 10 de vida
vida += 10
//Adiciona 80 a experiência
experiencia +=80
//Aumentou 10 em seu nivel
nivel += 10

console.log('')
console.log('...................30 minutos depois......................')
console.log('')
console.log('A luta se encerra e essas são as informações de', nome,'no final:')
console.log('Vida:', vida + '| Força', inimigo,':',poderInimigo)
console.log('Nível:', nivel + '| M:', mojo)
console.log('Fases:', fases + ' | Experiência:', experiencia)
console.log('Vida do Inimigo:',vidaInimigo)
console.log('')
console.log('Vamos melhorar a sua arma?')

if(mojo >= megaFight){
    console.log('Você agora possui a arma Mega Fight!')
    mojo = mojo - megaFight
}else if(mojo >= boraLuta){
    console.log('Agora você possui a arma Bora Luta!')
    mojo = mojo - megaFight
}else if(mojo >= fight){
    console.log('Agora você possui a arma Fight!')
    mojo = mojo - fight
}else{
    console.log('Mojo insuficiente')
}

console.log('')
console.log('------------------------------------- CAPITULO 2 ---------------------------------------------')
console.log('TopD+++, agora, você precisará seguir para um mercado e buscar mantimentos. Não há ninguém lá, porém roubar é crime,')
console.log('então pague seu sandwich, seu galão de água, curativos médicos, e se der um chocolate raro')

let lancheAgua = 10
let agua = 10
let curativo = 5
let chocolate = 100

if(mojo >= lancheAgua){
    console.log('Lanche + Galão de água de brinde pago!')
    mojo = mojo - lancheAgua
}
if(mojo >= agua){
    console.log('Galão de água pago!')
    mojo = mojo - agua
}
if(mojo >= curativo){
    console.log('Curativos pago!')
    mojo = mojo - curativo
}
if(mojo >= chocolate){
    console.log('Chocolate pago!')
}
if(mojo < curativo && mojo < agua && mojo < lancheAgua){
    console.log('Mojo insuficiente para mais compras...')
}

//Aumenta experiência
experiencia += 80

//Pode passar para o final?
fimOuNao = vida > 100

console.log('')

console.log('M:', mojo + '|Experiência:', experiencia)

console.log('')
console.log('Pode continuar para o fim?', fimOuNao)
console.log('----------------------------------- CAPITULO FINAL -------------------------------------------')
console.log('Agora', nome, 'está chegando na antiga empresa "Deli Protect", que tem uma máquina que remove')
console.log('totalmente imperfeições e malicias do ar, como a radiação. Mas no meo do caminho, é parado pelo')
console.log(inimigo ,'que tenta lutar com você, mas uma chuva se inicia e ele é feito de fumaça... Muito bem, você chegou até')
console.log('até o final e ativou a purificação do ar! Vamos descobrir se você ganhou?')

//Variavel Booleandas
let ganhou = experiencia > 150 && vida > 100

console.log('')
console.log('De acordo com suas informações finais,',ganhou)
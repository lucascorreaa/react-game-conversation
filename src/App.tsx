import React, { useState } from 'react'
import './App.css'

const App: React.FC = () => {

  // Array com todas as mensagens que serão exibidas
  const messages = [
    'Ei dev, tranks?!',
    'Professor Corrêa aqui, alguns já me conhecem, outros não, mas tudo bem, vamos lá!',
    'Estou aqui hoje para demonstrar uma gameficação de conversa em React, como no jogo de pokemon fire red...',
    'Vou usar React, Typescript, um pouco de CSS e HTML para fazer isso...',
    'Dentro do React, vou usar alguns Hooks, como:',
    'UseState para gerenciar o indice da mensagem atual, no qual está lendo agora...',
    'UseEffect para adicionar um listener para capturar o evento de pressionar a tecla enter, como você está fazendo agora...',
    'Uma função para avançar para a próxima mensagem...',
    'Um Array com todas as mensagens que serão exibidas...',
    'E por fim, um componente de mensagem que recebe a mensagem atual e a exibe na tela...',
    'Vou usar Github para versionar o código, a Vercel para hospedar o site...',
    'Aqui está o link do repositório do Github: https://github.com/lucascorreaa/react-game-conversation',
    'Quer saber mais sobre mim? Acesse meu site: https://github.com/lucascorreaa',
    'Para contratar meus serviços, acesse: suportededomingo.com.br',
    'Como todo o jogo de RPR da Game Freak, não tem como voltar as mensagens, seja diferentes dos iguais, então, até a próxima dev!',
  ]

  // Estado para controlar o índice da mensagem atual
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  return (
    <div className="game-container">
      <p>{messages[currentMessageIndex]}</p>
      <p>Pressione Enter ↵ para continuar.</p>
    </div>
  )
}

export default App

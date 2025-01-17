import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import PC from './assets/images/pc-correa-pokemon.png';

const App: React.FC = () => {
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
    { type: 'link', content: 'https://github.com/lucascorreaa/react-game-conversation', label: 'Repositório no Github' },
    'Quer saber mais sobre mim?',
    { type: 'link', content: 'https://github.com/lucascorreaa', label: 'Meu Github' },
    'Para contratar meus serviços:',
    { type: 'link', content: 'https://suportededomingo.com.br', label: 'Suporte de Domingo' },
    'Como todo o jogo de RPR da Game Freak, não tem como voltar as mensagens. Seja diferentes dos iguais, até a próxima dev!',
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handleNextMessage = useCallback(() => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex((prev) => prev + 1);
    } else {
      window.close();
    }
  }, [currentMessageIndex, messages.length]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleNextMessage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleNextMessage]);

  return (
    <div className="game-container">
      <img src={PC} alt="Professor Corrêa versão game freak" />
      <div className="game-text">
        {typeof messages[currentMessageIndex] === 'string' ? (
          <p>{messages[currentMessageIndex]}</p>
        ) : (
          <a
            href={messages[currentMessageIndex].content}
            target="_blank"
            rel="noopener noreferrer"
          >
            {messages[currentMessageIndex].label}
          </a>
        )}
      </div>
    </div>
  );
};

export default App;

import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import PC from './assets/images/professor-correa.png';

const App: React.FC = () => {
  const messages = [
    'Ei dev, tranks?!',
    'Professor Corrêa aqui, alguns já me conhecem, outros não, mas tudo bem, vamos lá!',
    'Hoje estou demonstrando uma gamificação de conversa em React, como no jogo Pokémon Fire Red.',
    'Estamos usando React e TypeScript para criar este projeto.',
    'Vamos falar sobre os hooks e conceitos que usamos para construir isso:',
    'O hook useState é usado para gerenciar o índice da mensagem atual que está sendo exibida.',
    'Com ele, conseguimos atualizar o estado da aplicação e exibir a mensagem correspondente no array.',
    'UseEffect é usado para capturar eventos do teclado, como pressionar Enter.',
    'Ele também garante que o listener seja adicionado e removido corretamente, evitando problemas de performance.',
    'UseCallback foi usado para memoizar a função de avanço das mensagens, evitando recriações desnecessárias a cada renderização.',
    { type: 'link', content: 'https://github.com/lucascorreaa/react-game-conversation', label: 'Repositório no Github' },
    'Quer saber mais sobre mim? Acesse o link abaixo.',
    { type: 'link', content: 'https://github.com/lucascorreaa', label: 'Meu Github' },
    'Para contratar meus serviços, visite o link abaixo.',
    { type: 'link', content: 'https://suportededomingo.com.br', label: 'Suporte de Domingo' },
    'E, como em qualquer RPG clássico da Game Freak, não dá para voltar nas mensagens. Até a próxima dev!',
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
    <div className="game-container" onClick={handleNextMessage}>
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

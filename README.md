
# ImHere

**ImHere** é um aplicativo desenvolvido em React Native para gerenciar a lista de participantes de um evento. 
Com este aplicativo, é possível adicionar participantes, removê-los, e exibir o número total de participantes registrados.

## 📹 Demonstração
<video src="./assets/app demonstration.mp4" controls width="600"></video>



## 📱 Funcionalidades

- Adicionar participantes à lista.
- Excluir participantes da lista com confirmação.
- Exibir a contagem de participantes.
- Preencher o nome e a data do evento com validação.

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **Expo**: Plataforma para desenvolvimento e execução de aplicativos React Native.
- **TypeScript**: Para maior segurança e tipagem estática.
- **react-native-masked-text**: Para entrada de dados mascarados, como a data do evento.

## 📂 Estrutura do Projeto

```
imhere/
├── assets/         # Ícones e imagens do projeto
├── src/
│   ├── components/ # Componentes reutilizáveis (e.g., Participant)
│   ├── screens/    # Telas do aplicativo (e.g., Home)
│   ├── styles/     # Estilos globais
├── App.tsx         # Arquivo principal do React Native
├── package.json    # Configurações e dependências do projeto
└── README.md       # Documentação do projeto
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
1. [Node.js](https://nodejs.org/) instalado.
2. [Expo CLI](https://expo.dev/) configurado.

### Passos
1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor Expo:
   ```bash
   npm start
   ```
4. Escaneie o QR Code com o aplicativo **Expo Go** no seu dispositivo ou use um emulador.

## 📝 Melhorias Futuras

- Adicionar persistência de dados com AsyncStorage.
- Implementar testes unitários para os componentes.
- Melhorar a interface do usuário com animações.
- Adicionar uma dashbord com todos os eventos criados podendo    manipulalos

## 💻 Autor

**Gustavo Berçacollo Vilela**  
Desenvolvedor Fullstack apaixonado por criar projetos úteis e impactantes.  
[LinkedIn](https://www.linkedin.com/in/gustavo-ber%C3%A7acollo-vilela-1b899125b/) 

---

Feito com 💚 usando React Native.

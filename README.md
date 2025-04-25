# 🛒 Mercafácil Test

Aplicativo de e-commerce desenvolvido como teste técnico, implementando funcionalidades básicas de um carrinho de compras.

## 🚀 Tecnologias Utilizadas

- React Native
- TypeScript
- React Navigation
- Context API
- Jest e React Testing Library (para testes)

## 📱 Funcionalidades

- Listagem de produtos
- Detalhes do produto
- Carrinho de compras
- Adição/remoção de itens
- Ajuste de quantidade
- Cálculo do total

## 🛠️ Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/rafaeld3v/mercafaciltest.git
cd mercafaciltest
```

2. Instale as dependências:
```bash
yarn install
```

3. Execute o projeto:
```bash
# Para iOS
cd ios && pod install && cd ..
yarn ios

# Para Android
yarn android
```

## 🧪 Executando os Testes

```bash
yarn test
```

## 📦 Estrutura do Projeto

```
src/
├── api/          # Dados mockados e tipos
├── assets/       # Recursos estáticos
├── components/   # Componentes reutilizáveis
├── context/      # Gerenciamento de estado
├── routes/       # Configuração de navegação
├── screens/      # Telas da aplicação
└── types/        # Definições de tipos
```

## 🧠 Arquitetura

- **Context API**: Gerenciamento de estado do carrinho
- **React Navigation**: Navegação entre telas
- **Componentes**: Estrutura modular e reutilizável
- **Testes**: Cobertura de testes unitários e de integração

## 👨‍💻 Autor

Rafael Tavares - [GitHub](https://github.com/rafaeld3v)

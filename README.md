# Academia Inteligente – Plataforma Web de Academia

## Descrição do Projeto
Este repositório contém o desenvolvimento da **Academia Inteligente**, um projeto acadêmico de front-end criado para simular a presença digital de uma academia moderna, com foco em **experiência do usuário**, **navegação intuitiva**, **visual responsivo** e **organização por rotas**.

A aplicação foi desenvolvida com **React**, utilizando **Vite** como ambiente de desenvolvimento e build, além de **Tailwind CSS** para estilização. O projeto apresenta uma proposta visual clean e contemporânea, com páginas dedicadas a **home**, **unidades**, **IMC**, **bioimpedância**, **contato**, **planos** e **sobre**.

O objetivo foi construir uma interface funcional e visualmente consistente, simulando uma aplicação real para academia, reunindo informações institucionais, recursos de navegação entre páginas e componentes reutilizáveis.

---

## Integrantes
- **Gabriel Ardito**
- **Felipe Menezes**
- **João Sarracine**
- **João Gonzales**

---

## Objetivo
O principal objetivo deste projeto foi aplicar, na prática, conceitos de desenvolvimento front-end moderno, incluindo:

- Criação de SPA com **React**
- Estruturação do projeto com **Vite**
- Estilização com **Tailwind CSS**
- Navegação entre páginas com **React Router DOM**
- Organização de componentes reutilizáveis
- Construção de layout **responsivo**
- Separação entre páginas, componentes e arquivos públicos
- Simulação de uma plataforma digital voltada para academia e bem-estar

---

## Funcionalidades do Projeto
O projeto conta com as seguintes páginas e recursos:

- **Página inicial (`Home`)**
  - Hero section com título de destaque
  - Chamada principal sobre a academia
  - Seção de resultados
  - Depoimentos de alunos
  - Navegação principal no topo

- **Página de unidades (`Unidades`)**
  - Exibição de unidades disponíveis
  - Cards com endereço
  - Integração visual com mapa/localização
  - Organização pensada para facilitar a busca da unidade mais próxima

- **Página de cálculo de IMC (`Imc`)**
  - Formulário para inserção de altura e peso
  - Cálculo básico de IMC
  - Estrutura visual centralizada e objetiva

- **Página de bioimpedância (`Bio`)**
  - Conteúdo explicativo sobre avaliação corporal
  - Apresentação de benefícios e informações sobre o serviço
  - Organização visual pensada para complementar os serviços da academia

- **Página de contato (`Contato`)**
  - Formulário com campos de nome, sobrenome e e-mail
  - Seleção de notificações de interesse
  - Botões de ação para interação do usuário

- **Página de planos (`Planos`)**
  - Comparação entre plano mensal e anual
  - Destaque visual para plano em evidência
  - Lista de benefícios em cada opção
  - Botões para escolha de plano

- **Página institucional (`Sobre`)**
  - Apresentação da proposta da academia
  - Texto institucional sobre missão e propósito
  - Cards com diferenciais da academia

- **Página de erro (`Error`)**
  - Tratamento visual para rota não encontrada
  - Melhoria da experiência do usuário em navegações inválidas

- **Recursos adicionais**
  - Header reutilizável
  - Footer reutilizável
  - Componentes separados por responsabilidade
  - Estrutura preparada para futuras expansões

---

## Estrutura de Diretórios
```bash
/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Resultado.jsx
│   │   └── ResultadoBio.jsx
│   │
│   ├── routes/
│   │   ├── Bio.jsx
│   │   ├── Contato.jsx
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   ├── Imc.jsx
│   │   ├── Planos.jsx
│   │   ├── Sobre.jsx
│   │   └── Unidades.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## Tecnologias Utilizadas

- **React**
- **Vite**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **React Router DOM**
- **HTML5**
- **CSS3**
- **Git e GitHub**

---

## Responsividade
O projeto foi desenvolvido com preocupação responsiva, buscando adaptação para diferentes dispositivos:

- **Celular**
- **Tablet**
- **Desktop**

Foram utilizados:

- utilitários do **Tailwind CSS**
- organização com `flex` e `grid`
- espaçamentos e proporções adaptados por breakpoint
- ajustes de layout para melhor leitura e navegação em múltiplos tamanhos de tela

---

## Identidade Visual
A identidade visual do projeto foi construída para transmitir a proposta de uma academia moderna, tecnológica e acessível, utilizando:

- fundo neutro em tom claro
- destaque em **verde** para títulos e elementos principais
- uso de **amarelo** como cor de ação e contraste
- textos em tons escuros para legibilidade
- cards com bordas arredondadas e organização limpa
- composição visual pensada para transmitir energia, clareza e confiança

Essa escolha visual reforça a ideia de uma marca fitness contemporânea, focada em evolução, resultados e praticidade.

---

## Navegação do Site
A navegação principal é feita por meio de uma navbar no topo da aplicação, permitindo acesso rápido às rotas principais.

### Menu principal:

- Unidades
- IMC
- Bio
- Contato
- Planos
- Sobre

A aplicação utiliza **React Router DOM** para gerenciar as rotas, tornando a navegação mais fluida dentro do projeto.

---

## Pontos de Destaque do Projeto
- Estrutura organizada por **rotas** e **componentes**
- Interface visual coerente entre todas as páginas
- Aplicação de conceitos modernos de front-end
- Reaproveitamento de layout com **Header** e **Footer**
- Projeto preparado para evolução futura com novas features

---

## Observações
Este projeto foi desenvolvido com fins **acadêmicos e educacionais**, com o objetivo de praticar conceitos fundamentais e intermediários de front-end utilizando tecnologias modernas do ecossistema React.

Apesar de ser uma aplicação de estudo, o projeto já apresenta uma base sólida para futuras melhorias, como:

- integração com API
- autenticação de usuários
- envio real de formulários
- sistema completo de cálculo e feedback de IMC
- painel administrativo
- agendamento online de avaliações e planos

---

## Licença
Este projeto é de uso acadêmico e educacional.

# 👕 Camisetas 3D Personalizadas 
<img width="1351" height="634" alt="image" src="https://github.com/user-attachments/assets/6179fcf1-a91b-4b8b-8366-0dbf79e2724e" />


Aplicação web interativa para personalização de camisetas em 3D com visual moderno, intuitivo e responsivo.  
*Crie camisetas únicas com apenas alguns cliques.*

🔗 [Demonstração online](https://camiseta-personalizada.vercel.app/) 📦 [Repositório GitHub](https://github.com/jhonywsantos/camiseta-personalizada/)

Este template fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras do ESLint.
Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
---

## 🗂️ Sobre o Projeto

O **Camiseta Personalizada** é uma aplicação web que permite ao usuário:

- 🎨 Personalizar a cor da camiseta em tempo real
<img width="911" height="590" alt="image" src="https://github.com/user-attachments/assets/f2e8a248-b5c1-4de2-9427-ffbeedd2d558" />
 
- 📷 Fazer upload de imagens ou aplicar logos e estampas  
- 🔄 Girar, visualizar e manipular o modelo 3D com fluidez
<img width="1007" height="629" alt="image" src="https://github.com/user-attachments/assets/2b1b77d0-d8c2-44c1-81af-0d330bdcc8a0" />  
- ⬇️ Baixar o modelo final customizado
<img width="887" height="606" alt="image" src="https://github.com/user-attachments/assets/cdb00205-2b50-4928-b069-8bcaad2cace2" />

- 🖱️ Interagir com uma interface moderna baseada em React e Three.js  

> 💻 **Importante**: até o momento, a aplicação está otimizada apenas para **uso em desktop**. A versão mobile está em ajustes para garantir responsividade e desempenho.

---
## 🛠️ Tecnologias Utilizadas

### 🎨 Frontend

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)  ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)  ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)  ![Framer Motion](https://img.shields.io/badge/-FramerMotion-EF007B?style=for-the-badge&logo=framer&logoColor=white)  ![Three.js](https://img.shields.io/badge/-Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)  
![Valtio](https://img.shields.io/badge/-Valtio-F05032?style=for-the-badge&logo=valtio&logoColor=white)  ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  ![Google Fonts](https://img.shields.io/badge/-GoogleFonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)  ![Fetch API](https://img.shields.io/badge/-FetchAPI-025A8D?style=for-the-badge&logo=api&logoColor=white)

---

## 📁 Estrutura de Pastas

```bash
camiseta-personalizada/
├─ public/                      # Arquivos públicos (favicon, imagens, etc.)
│  └─ vite.svg                  # Ícone do projeto
│
├─ src/                         # Código-fonte da aplicação
│  ├─ assets/                   # Imagens, logos e arquivos estáticos
│  ├─ components/               # Componentes reutilizáveis (ColorPicker, FilePicker, CustomButton, etc.)
│  ├─ config/                   # Arquivos de configuração (constants, helpers, motion)
│  ├─ pages/                    # Páginas principais (Home, Customizer)
│  ├─ store/                    # Estado global com Valtio
│  ├─ index.css                 # Estilos globais com Tailwind
│  ├─ main.jsx                  # Ponto de entrada do React
│  └─ App.jsx                   # Componente principal da aplicação
│
├─ index.html                   # HTML base do projeto
├─ package.json                 # Dependências e scripts
├─ tailwind.config.js           # Configuração do Tailwind CSS
└─ README.md                    # Documentação do projeto
```
---
## 🚀 Como Executar Localmente

## 🔧 Pré-requisitos
1. Node.js
2. Git
```bash
## ▶️ Passos
# Clone o repositório
git clone https://github.com/jhonywsantos/camiseta-personalizada.git

# Acesse o diretório
cd camiseta-personalizada

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 📌 Funcionalidades em Desenvolvimento
- 📱 Responsividade para dispositivos móveis
- 🧾 Histórico de personalizações salvas

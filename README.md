# Energest - Gestor de Leads

Sistema de gestão de leads desenvolvido em Angular 21 com Material Design.

## 🚀 Deploy Automático com GitHub Actions

Este projeto está configurado para deploy automático no GitHub Pages através do GitHub Actions.

### Configuração Inicial

1. **Ative o GitHub Pages no repositório:**
   - Vá em `Settings` > `Pages`
   - Em `Source`, selecione `GitHub Actions`
   - Salve as configurações

2. **Push para a branch main:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Acompanhe o deploy:**
   - Acesse a aba `Actions` no GitHub
   - Veja o workflow `Deploy Angular to GitHub Pages` em execução
   - Após conclusão, seu site estará disponível em: `https://<seu-usuario>.github.io/energest-web/`

### Deploy Manual

Se necessário, você pode disparar o deploy manualmente:
- Vá em `Actions` > `Deploy Angular to GitHub Pages` > `Run workflow`

## 🔐 Autenticação (Desenvolvimento)

Para testar o sistema localmente, execute no console do navegador:

```javascript
localStorage.setItem('auth_user', JSON.stringify({
  id: '1',
  name: 'João Silva',
  email: 'joao@example.com',
  role: 'admin'
}));
localStorage.setItem('auth_token', 'mock-token-12345');
location.reload();
```

## 💻 Desenvolvimento Local

### Servidor de Desenvolvimento

```bash
ng serve
```

Navegue para `http://localhost:4200/`. A aplicação recarrega automaticamente ao modificar arquivos.

### Build de Produção

```bash
ng build --configuration production
```

Os arquivos compilados estarão em `dist/web/browser/`.

### Build para GitHub Pages (local)

```bash
ng build --base-href=/energest-web/
```

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── common/          # Componentes reutilizáveis
│   │   │   └── container/   # Container com breadcrumb
│   │   ├── features/        # Páginas principais
│   │   │   └── dashboard/   # Dashboard/Roadmap
│   │   └── layouts/         # Layouts da aplicação
│   │       └── sidebar/     # Sidebar com dark mode
│   ├── layouts/
│   │   ├── auth-layout/     # Layout para páginas autenticadas
│   │   └── public-layout/   # Layout para páginas públicas
│   ├── services/            # Serviços globais
│   │   ├── auth.service.ts  # Autenticação
│   │   └── theme.service.ts # Dark mode
│   └── styles/              # Estilos globais
│       ├── colors.scss      # Paleta de cores + CSS variables
│       ├── global.scss      # Reset e estilos base
│       ├── mixins.scss      # Mixins SCSS
│       └── theme.scss       # Tema Material customizado
└── public/
    └── 404.html            # SPA redirect handling
```

## 🎨 Funcionalidades

- ✅ **Dark Mode** - Sistema de temas com persistência localStorage
- ✅ **Sidebar Responsivo** - Material Drawer com navegação
- ✅ **Container Component** - Breadcrumb automático baseado em rotas
- ✅ **Autenticação** - Sistema de auth com guards (mock)
- ✅ **Roadmap** - Dashboard com planejamento de implementações
- ✅ **SCSS Moderno** - Usando `@use` com CSS Variables
- ✅ **Standalone Components** - Arquitetura Angular 19+

## 🛠️ Tecnologias

- **Angular 21** - Framework
- **Angular Material** - UI Components
- **TypeScript** - Linguagem
- **SCSS** - Estilos
- **Signals** - Reatividade
- **GitHub Actions** - CI/CD

## 📝 Scripts Disponíveis

```bash
npm start              # Inicia servidor de desenvolvimento
npm run build          # Build de produção
npm run watch          # Build em modo watch
npm test               # Executa testes unitários
npm run lint           # Verifica código com ESLint
```

## 🔄 Workflow do GitHub Actions

O arquivo `.github/workflows/deploy.yml` automatiza:

1. ✅ Checkout do código
2. ✅ Setup do Node.js 20
3. ✅ Instalação de dependências (`npm ci`)
4. ✅ Build da aplicação Angular
5. ✅ Upload dos artifacts para GitHub Pages
6. ✅ Deploy no GitHub Pages

## 📚 Recursos Adicionais

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Angular Material](https://material.angular.io/)
- [GitHub Pages](https://docs.github.com/pages)
- [GitHub Actions](https://docs.github.com/actions)

## 📄 Licença

Este projeto é de uso interno.

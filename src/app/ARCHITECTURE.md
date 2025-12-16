# Estrutura da Aplicação - Diagrama

## Hierarquia de Componentes

```
AppComponent (Raiz)
└── RouterOutlet
    ├── PublicLayoutComponent
    │   └── RouterOutlet
    │       ├── LoginComponent (futuro)
    │       ├── SignUpComponent (futuro)
    │       └── ...
    │
    └── AuthLayoutComponent
        ├── SidebarComponent (futuro)
        └── Container
            └── RouterOutlet
                ├── DashboardComponent (futuro)
                ├── ProfileComponent (futuro)
                └── ...
```

## Fluxo de Autenticação

```
1. Usuário acessa a aplicação
2. AuthService carrega estado do localStorage
3. Se autenticado:
   - App redireciona para /app (AuthLayout)
   - Sidebar + Container renderizados
4. Se não autenticado:
   - App permanece em / (PublicLayout)
   - Login/SignUp renderizados
```

## Arquitetura de Camadas

```
┌─────────────────────────────────────────────┐
│         AppComponent (Router)               │
├─────────────────────────────────────────────┤
│  PublicLayout       │      AuthLayout        │
├─────────────────────┴────────────────────────┤
│     Componentes Específicos (Features)       │
├─────────────────────────────────────────────┤
│      Componentes Reutilizáveis (Common)     │
├─────────────────────────────────────────────┤
│  Services (Auth, HTTP, etc)                 │
├─────────────────────────────────────────────┤
│  Models & Guards & Interceptors              │
└─────────────────────────────────────────────┘
```

## Estado da Aplicação (Signals)

```
AuthService
├── isAuthenticated: Signal<boolean>
├── currentUser: Signal<User | null>
└── isLoading: Signal<boolean>
```

## Responsabilidades por Camada

| Camada | Responsabilidade |
|--------|-----------------|
| **App Component** | Orquestrar rotas e layouts |
| **Layouts** | Estrutura visual, routing outlet |
| **Components** | Interface visual e lógica |
| **Services** | Lógica de negócio, HTTP calls |
| **Guards** | Proteção de rotas |
| **Interceptors** | Tratamento global de HTTP |

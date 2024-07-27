# ToDo List
APP of tasks manager with login and valitadion in react and express based in Turborepo kitchen sink for put server and web app in single repository.


## Dependencies and tools
### Backend
- `mongoDB` 6.8.0
- `mongoose` 8.5.1
- `morgan` 1.10.0
- `express` 4.18.3
- `cors` 2.8.5
- `typescript` 5.3.3

### Frontend
- `react` 18.2.0
- `react-dom` 18.2.0
- `vite` 5.1.4

## Getting run

Do node_modules installation by command:
```sh
pnpm intall
```

Run the following command:
```sh
pnpm dev
```

### Apps and Packages

- `web`: a frontend app
- `server`: a backend app
- `@repo/eslint-config`: ESLint configurations used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a dummy React UI library (which contains `<CounterButton>` and `<Link>` components)
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).


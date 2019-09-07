A todo list demo of using Egg.js, React and MobX altogether.

This repository keeps all different "stages" of this demo, so you can see the "evolution" path of it.

### Branches

- **master**: rewrite with Typescript. To use Typescript in Egg.js please check [`egg-ts-boilerplate`](https://github.com/brickyang/egg-ts-boilerplate).
- **v2**: use [egg-webpack][] for compile and hot reloading webpack in development, no SSR.
- **v1**: the "raw" version, everything is independent.

### Installation

```bash
$ git clone git@github.com:brickyang/egg-react-mobx-demo.git
$ cd egg-react-mobx-demo
$ npm install
```

### Development

```bash
$ npm run dev
```

### Production

```bash
$ npm run build
$ npm start
// open http://localhost:7001
```

[egg]: https://eggjs.org
[egg-webpack]: https://github.com/hubcarl/egg-webpack

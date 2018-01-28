Demo of using egg.js, react and mobx with server-rendering.

This is only a simplest example to show how these things work together. It keeps everything "original", exposed every config and details.

### Branches

You can see deffirent "stage" of this demo via deffirent branches.

* **master**: use `[egg-webpack][]` for compile and hot reload webpack in development.
* **v1**: the "raw" version, everything is independent.

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

### Test

```bash
$ npm test
```

[egg]: https://eggjs.org
[egg-webpack]: https://github.com/hubcarl/egg-webpack

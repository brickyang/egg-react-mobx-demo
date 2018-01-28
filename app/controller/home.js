require('babel-core/register')
const React = require('react')
const { renderToString } = require('react-dom/server')
const App = require('../../src/App.jsx').default
const TodoList = require('../../src/store/todolist').default

module.exports = app => {
    class HomeController extends app.Controller {
        async index(ctx) {
            const initialStore = ctx.service.store.initialStore
            const store = new TodoList(initialStore)

            const content = renderToString(
                React.createElement(App, { todoList: store })
            )

            await ctx.render('index', {
                title: app.config.title,
                assets: require(app.config.assets),
                content,
                initialStore: JSON.stringify(initialStore),
            })
        }
    }
    return HomeController
}

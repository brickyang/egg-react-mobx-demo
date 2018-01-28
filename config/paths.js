const path = require('path')
const fs = require('fs')
const url = require('url')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const envPublicUrl = process.env.PUBLIC_URL

function ensureSlash(path, needsSlash) {
    const hasSlash = path.endsWith('/')
    if (hasSlash && !needsSlash) {
        return path.substr(path, path.length - 1)
    } else if (!hasSlash && needsSlash) {
        return `${path}/`
    }
    return path
}

const getPublicUrl = appPackageJson =>
    envPublicUrl || require(appPackageJson).homepage

function getServedPath(appPackageJson) {
    const publicUrl = getPublicUrl(appPackageJson)
    const servedUrl =
        envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/')
    return ensureSlash(servedUrl, true)
}

module.exports = {
    appBuild: resolveApp('app/public'),
    appNodeModules: resolveApp('node_modules'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    publicUrl: getPublicUrl(resolveApp('package.json')),
    servedPath: getServedPath(resolveApp('package.json')),
    testsSetup: resolveApp('src/setupTests.js'),
}

const fs = require('fs')
const path = require('path')
const minifier = require('html-minifier').minify

const rootPath = path.join(__dirname, '/../', 'dist')

function minify(directory, extension) {
    filter = new RegExp(/^\./).test(extension) ? extension : '.' + extension

    if (!fs.existsSync(directory)) {
        return
    }

    let files = fs.readdirSync(directory)
    for (f in files) {
        let filename = path.join(directory, files[f])
        let stat = fs.lstatSync(filename)

        if (stat.isDirectory()) {
            minify(filename, filter)
        }

        else if (filename.indexOf(filter) >= 0) {
            let oldHtml = fs.readFileSync(filename, 'utf-8')

            let result = minifier(oldHtml, {
                collapseWhitespace: true,
                removeComments: true,
                removeOptionalTags: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeTagWhitespace: true
            })

            fs.writeFileSync(filename, result, { encoding: 'utf-8' })
        }
    }
}

minify(rootPath, 'html')
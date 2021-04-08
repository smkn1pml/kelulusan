/**
 * This file is used to collect all data retrieved
 * from the database using the API to google script.
 *
 * This will be executed after the Node.js
 * installation and before the deployment of the site.
 */

const fs = require('fs')
const path = require('path')
const axios = require('axios').default
const macros = require('./../config.js').database

const collect = async () => {

    try {

        let { data } = await axios.get(macros)

        if (data.result === 'error') {
            throw data.error
        }

        let file_path = path.join(__dirname, '/kelulusan.json')
        let results = JSON.stringify(data.data, null, 4)

        fs.writeFile(file_path, results, { flag: 'wx' }, (err) => {
            if (err) throw err;

            console.log('It\'s saved!')
        })

    } catch (error) {
        throw error
    }

}

collect()
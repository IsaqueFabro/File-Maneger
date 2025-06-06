const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, {recursive: true}, (err) => {
            if (err) {
                reject(err)
             } else {
                resolve(`Directory '${dirPath}' created successfully.`);
            }
        })
    });
}

function createFile(filePath, content = '') {
    return new Promise ((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`File '${filePath}'created successfully.`);
            }
        });
    });
};

module.exports = {createDirectory, createFile};

// pq usar a promise? explice passo a passo esses codigo, oque eles fazem, como funciona a promise e o (resolve, reject)
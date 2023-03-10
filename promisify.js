const fs = require('fs');

const readFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if(err) 
                reject(err);
            else
                resolve(data);
        });
    });
}

const writeFile = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if(err) 
                reject(err);
            else
                resolve('File Created');
        });
    });
}

const unlinkFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.unlink(file, (err) => {
            if(err) 
                reject(err);
            else
                resolve('File Deleted');
        });
    });
}

module.exports = {readFile, writeFile, unlinkFile}
// import multiEntry from "rollup-plugin-multi-entry";
// import globby from 'globby'

// export default {
//     input: 'src/compoenent/**/*.js',
//     plugins: [multiEntry()],
//     output: {
//         file: 'bundle.js',
//         format: 'cjs'
//     }
// };

import jsx from 'rollup-plugin-jsx'
import resolve from 'rollup-plugin-node-resolve';
const globby = require('globby');
const configs = globby.sync(['src/components/**/*.js', "!src/components/**/*.spec.js"]).map(inputFile => ({
    input: inputFile,
    output: {
        file : inputFile.replace('src', 'dist'),
        format: 'umd',
        name: getFileName(inputFile),
    },
    plugins: [
        jsx({
            factory: 'React.createElement'
        }),
        resolve()
    ]
}));



function getFileName(string){
    var t = string.split("/");
    console.log(t);
    var name = t[t.length-1].replace(".js", "");
    return name;
}

console.log(configs);
module.exports = configs
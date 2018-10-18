const postcss = require('postcss'),
    fs = require('fs');
 
fs.readFile('src/and-typeface.scss', (err, css) => {
    if (err) throw err;
    postcss([
        require('@csstools/postcss-sass')({
            precision: 10
        }),
        require('postcss-responsive-type')
    ])
    .process(css, {
        from: 'src/and-typeface.scss',
        to: 'dist/and-typeface.css'
    })
    .then(result => {
        fs.writeFile('dist/and-typeface.css', result.css, (err) => {
            if (err) throw err;
        })
        if (result.map) {
            fs.writeFile('dist/and-typeface.css.map', result.map, (err) => {
                if (err) throw err;
            })
        }
    })
});
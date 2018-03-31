exports.files = {
    javascripts: {
        joinTo: {
            'js/main.js': [/^node_modules/, /^(app)/]
        },
    },
    stylesheets: {
        joinTo: 'css/main.css'
    },
};

exports.plugins = {
    pleeease: {
        sass: true,
        autoprefixer: {
            browsers: [
                'last 2 version',
                'ie >= 9',
                'IOS >= 7'
            ]
        },
        minify: {
            autoprefixer: false,
            discardComments: {
                removeAll: true
            }
        }
    },
    static: {
        processors: [
            require('html-brunch-static')({
                partials: /partials?/,
                layouts: /layouts?/,
                handlebars: {
                    enableProcessor: true
                }
            })
        ]
    }
};


exports.modules = {
    autoRequire: {
        'js/main.js': ['js/main'],
    }
};

exports.npm = {
    globals: {
        jQuery: 'jquery',
        $: 'jquery',
    },
    /* load styles from node_modules folder
     * Example:
     *
     * styles: {
     *    bootstrap: ['dist/css/bootstrap.css']
     * }
     */
};

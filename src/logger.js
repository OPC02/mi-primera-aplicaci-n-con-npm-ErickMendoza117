const log4js = require("log4js");

log4js.configure({
    appenders:{
        //Muestra en consola los logs
        console:{type: 'console'},
        // Maneja el archivo donde se dopositaran los logs de la aplicacion
        file: {type:'file', filename:'app.log'}
    },
    categories:{
        default:{
            appenders: ['console', 'file'],
            level: 'warn'
        }
    }
});

const logger = log4js.getLogger();

module.exports = logger;
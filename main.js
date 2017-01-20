var CV = require('./src/cv.js').CV
var ConsoleLogger = require('./src/consoleLogger.js').ConsoleLogger

var cv = new CV()

cv.setIntroduction("Hello")

cv.addEducation({
    title: 'High school',
    from: '2005',
    to: '2008'
})

cv.printCV(new ConsoleLogger())
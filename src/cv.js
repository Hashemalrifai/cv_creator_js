var CV = function() {

    this.introduction = ''
    this.educations = []

    this.getIntroduction = function() {
        return this.introduction
    }

    this.setIntroduction = function(text) {
        this.introduction = text
    }

    this.addEducation = function(edu) {
        if (edu.title == '') {
            throw {
                code: "TITLE_EMPTY",
                message: "Title is empty!"
            }
        }
        this.educations.push(edu)
    }

    this.getEducations = function() {
        return this.educations
    }

    this.printCV = function(logger) {

        logger.log("introduction:")
        logger.log(this.introduction)
        
        logger.log("------------------------")

        logger.log("Educations:")
        var edus = this.getEducations()
        for (e in edus) {
            logger.log(edus[e].from + ' to ' + edus[e].to)
            logger.log(edus[e].title)
            logger.log('=======')
        }
    }
}

exports.CV = CV
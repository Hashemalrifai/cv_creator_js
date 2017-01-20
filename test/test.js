var assert = require('assert')
var CV = require('../src/cv.js').CV

describe('introduction', function() {
    it ('sets introduction', function() {
        var cv = new CV()
        cv.setIntroduction('test')
        
        assert.equal('test', cv.introduction)
    })

    it ('gets introduction', function() {
        var cv = new CV()
        cv.introduction = 'test'
        
        assert.equal('test', cv.getIntroduction())
    })
})


describe('education', function() {
    it ('doesn\'t allow empty education', function() {
        var cv = new CV()

        var edu = {
            title: "",
            from: 2008,
            until: 2011
        }

        try {
            cv.addEducation(edu)
        } catch (err) {
            assert.equal(err.code, "TITLE_EMPTY")
            assert.equal(0, cv.educations.length)
        }
    })

    it ('adds education', function() {
        var cv = new CV()

        var edu = {
            title: "Univ",
            from: 2008,
            until: 2011
        }

        try {
            cv.addEducation(edu)
            assert.equal(cv.educations[0].title, edu.title)
        } catch (err) {
        }
    })

    it ('returns empty array when getEducation() called with no educations', function() {
        var cv = new CV()
        var edus = cv.getEducations()
        assert.equal(edus.length, 0)
    })

    it ('gets all educations', function() {
        var cv = new CV()

        var edu1 = {
            title: "High School",
            from: 2005,
            until: 2008
        }

        var edu2 = {
            title: "Univ",
            from: 2008,
            until: 2011
        }

        cv.addEducation(edu1)
        cv.addEducation(edu2)

        var edus = cv.getEducations()
        assert.equal(edus.length, 2)
        assert.equal(cv.educations.length, 2)
        
    })
})
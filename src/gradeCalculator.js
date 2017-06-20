(function(exports) {
    function GradeCalculator(gradeBoundaries = {
        A: 80,
        B: 70,
        C: 60,
        D: 50,
        E: 40,
        Fail: "Fail"
    }) {
        this.gradeBoundaries = gradeBoundaries;
    };

    GradeCalculator.prototype = {
        calculateGrade: function(grades) {
            let grade = "";
            if (!grades) return grade;
            const average = getAverage(grades);
            grade = getGrade(average, this.gradeBoundaries);
            return grade;
        }
    };

    function getAverage(grades) {
        return grades.reduce(function(a,b) {
            return a + b;
        }) / grades.length;
    };

    function getGrade(average, boundaries) {
        let grade = getLowestGrade(boundaries);
        for(letter in boundaries) {
            if (average >= boundaries[letter]) {
                grade = letter;
                break;
            };
        };
        return grade;
    };

    function getLowestGrade(boundaries){
        const keys = Object.keys(boundaries);
        return keys[keys.length-1];
    }

    exports.GradeCalculator = GradeCalculator;
})(this);

describe("GradeCalculator", function(){
    let gradeCalculator, customCalc;

    describe("#calculateGrade", function() {

        beforeEach(function() {
            gradeCalculator = new GradeCalculator();
        });

        it("should return a string", function() {
            expect(gradeCalculator.calculateGrade()).toBe("");
        });
        it("should return A for average of 80+", function() {
            expect(gradeCalculator.calculateGrade([70,90])).toBe("A");
            expect(gradeCalculator.calculateGrade([85,90])).toBe("A");
        });
        it("should return B for an average between 70 and 79", function(){
            expect(gradeCalculator.calculateGrade([70,78])).toBe("B");
        });
        it("should return C for an average between 60 and 69", function(){
            expect(gradeCalculator.calculateGrade([60,62])).toBe("C");
        });
        it("should return D for an average between 50 and 59", function(){
            expect(gradeCalculator.calculateGrade([55,53])).toBe("D");
        });
        it("should return E for an average between 40 and 49", function(){
            expect(gradeCalculator.calculateGrade([42,48])).toBe("E");
        });
        it("should return fail for anything below 40", function(){
            expect(gradeCalculator.calculateGrade([20,19])).toBe("Fail");
        });
    });

    describe("using custom boundaries", function() {
        beforeEach(function() {
            customCalc = new GradeCalculator({
                A: 90,
                B: 80,
                C: 70,
                D: 60,
                E: 50,
                Fail: "Fail"
            });
        });

        it("should return B for average between 80 and 89", function() {
            expect(customCalc.calculateGrade([81,87])).toBe("B");
        });
        it("should return fail for anything below 50", function(){
            expect(customCalc.calculateGrade([49,47])).toBe("Fail");
        });
    });
});

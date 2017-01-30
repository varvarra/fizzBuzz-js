describe("Fizzbuzz", function() {

  var fizzbuzz;

  describe('knows when the number is NOT', function(){

    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

});

describe('filter', function() {
  beforeEach(module('myApp'));

  describe('reverse', function() {
    it('should reverse a string', inject(function(reverseFilter) {
      expect(reverseFilter('ABCD')).to.equal('DCBA');
      expect(reverseFilter('Jonathan')).to.equal('nahtanoJ');
    }));
  });
});

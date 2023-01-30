const getAreas = require('./getAreas');

describe('getAreas test suite', () => {
   it('should not throw an error executing function', () => {
      expect(() => getAreas([], [])).not.toThrow();
   });
});

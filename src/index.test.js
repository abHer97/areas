const getAreas = require('./getAreas');

describe('getAreas test suite', () => {
   it('should not throw an error executing function', () => {
      expect(() => getAreas([], [])).not.toThrow();
   });

   it('should return a promise', () => {
      const returnedValue = getAreas([], []);

      expect(returnedValue instanceof Promise).toBeTruthy();
   });

   it('should return areas correctly', () => {
      getAreas(['square', 'rectangle', 'circle', 'triangle'], [[2], [3, 4], [5], [2, 4]]).then(
         (areas) => {
            expect(areas).toEqual([4, 12, 78.5, 4]);
         }
      );

      getAreas(
         ['square', 'square', 'rectangle', 'circle', 'triangle'],
         [[2], [4], [5, 6], [8], [3, 7]]
      ).then((areas) => {
         expect(areas).toEqual([4, 16, 30, 200.96, 10.5]);
      });
   });
});

const PI = 3.14;

function roundNumber(value) {
   return parseFloat(value.toFixed(2));
}

function calculateArea(shape, sides) {
   return new Promise((res) => {
      switch (shape.toLowerCase()) {
         case 'square':
            res(roundNumber(sides[0] * sides[0]));
            break;
         case 'rectangle':
            res(roundNumber(sides[0] * sides[1]));
            break;
         case 'circle':
            res(roundNumber(PI * sides[0] * sides[0]));
            break;
         case 'triangle':
            res(roundNumber(0.5 * sides[0] * sides[1]));
            break;
         default:
            throw -1;
      }
   });
}

function getAreas(shapes, sides) {
   return new Promise((res, rej) => {
      const areas = shapes.map((shape, i) => {
         return calculateArea(shape, sides[i]);
      });

      Promise.all(areas)
         .then((areas) => {
            res(areas);
         })
         .catch((err) => {
            rej(err);
         });
   });
}

module.exports = getAreas;

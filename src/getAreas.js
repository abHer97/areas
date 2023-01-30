const PI = 3.14;

function calculateArea(shape, sides) {
   return new Promise((res, rej) => {
      switch (shape.toLowerCase()) {
         case 'square':
            res(sides[0] * sides[0]);
            break;
         case 'rectangle':
            res(sides[0] * sides[1]);
            break;
         case 'circle':
            res(PI * sides[0] * sides[0]);
            break;
         case 'triangle':
            res(0.5 * sides[0] * sides[1]);
            break;
         default:
            rej(-1);
      }
   });
}

function getAreas(shapes, sides) {
   return new Promise((res, rej) => {
      const areas = shapes.map((shape, i) => {
         return calculateArea();
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

const PI = 3.14;

export function calculateArea(shape, sides) {
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

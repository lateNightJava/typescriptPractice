/*
  Optional Params

  Allow for a param shape to not have to include everything
*/

interface SquareCofig {
  color?: string;
  width?: number;
}

interface SquareReturn {
  color: string;
  area: number;
}

// createSquare(<paramName>: TypeInterface): TypeInterfaceReturn
function createSquare(config: SquareCofig): SquareReturn {
// function createSquare(config: SquareCofig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };

  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log('Black square', mySquare);

mySquare = createSquare({ width: 20 });
console.log('Area 400 square', mySquare);

mySquare = createSquare({});
console.log('Default Square', mySquare);

mySquare = createSquare({ candy: "black", color: "red" });
console.log('Red square', mySquare);

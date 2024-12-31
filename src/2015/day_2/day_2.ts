export function calculateWrappingPaperAreaForBoxes(dimensions: string): number {
  const arrayOfDimensions: string[] = dimensions.split(/\r?\n|\r|\n/g);
  let totalPaperArea = 0;

  arrayOfDimensions.forEach((dimension) => {
    const [length, width, height] = dimension.split('x').map(Number);
    const lengthWidth = length * width;
    const lengthHeight = length * height;
    const widthHeight = width * height;

    const surfaceArea = 2 * (lengthWidth + lengthHeight + widthHeight);
    const slack = Math.min(lengthWidth, lengthHeight, widthHeight);

    totalPaperArea += surfaceArea + slack;
  });

  return totalPaperArea;
}

export function calculateRibbonLengthForBoxes(dimensions: string): number {
  const arrayOfDimensions: string[] = dimensions.split(/\r?\n|\r|\n/g);
  let totalRibbonLength = 0;

  arrayOfDimensions.forEach((dimension) => {
    const parsedDimension = dimension.split('x').map(Number);
    const [smallestSide, secondSmallestSide] = parsedDimension.map(Number).sort((a, b) => a - b);

    const presentWrapperLength = 2 * (smallestSide + secondSmallestSide);
    const bowLength = parsedDimension.reduce((prev, curr) => prev * curr);

    totalRibbonLength += presentWrapperLength + bowLength;
  });

  return totalRibbonLength;
}
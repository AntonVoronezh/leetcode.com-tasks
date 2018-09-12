const arr = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
const flipAndInvertImage = (arg) => {
  const result = [];
  const flipImage = argFlip => result.push(argFlip.reverse());
  const invertImage = argInvert => argInvert.map(item => (item === 0 ? 1 : 0));
  arg.map(item => flipImage(item));
  return result.map(item => invertImage(item));
};

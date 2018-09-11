const morse = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
};

const words = ['gin', 'zen', 'gig', 'msg'];

const makeMorseFromWord = (arg) => {
  let out = '';
  const wordArr = arg.split('');
  for (let i = 0; i < wordArr.length; i += 1) {
    const word = wordArr[i];
    out += morse[word];
  }
  return out;
};

const uniqueMorseRepresentations = (arg) => {
  const arr = arg;
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(makeMorseFromWord(arr[i]));
  }
  return result;
};

console.log(uniqueMorseRepresentations(words));


const toLowerCase = (str) => {
  let arr = '';

  const strArr = str.split('');

  for (let i = 0; i < strArr.length; i += 1) {
    strArr[i] = strArr[i].toLowerCase();
    arr += strArr[i];
  }
  return arr;
};

console.log(toLowerCase('HFjdjHJdkfdJ'));

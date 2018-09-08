const numJewelsInStones = (J, S) => {
    const classes = J.split('');
  
    let out = 0;
  
    const getCount = (arr) => {
      const target = arr;
      let pos = 0;
      while (true) {
        const foundPos = S.indexOf(target, pos);
        if (foundPos === -1) break;
        pos = foundPos + 1;
        out += 1;
      }
    };
  
    for (let i = 0; i < classes.length; i += 1) {
      getCount(classes[i]);
    }
  
    return out;
  };
  
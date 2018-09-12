•	const arr = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
•	
•	const flipAndInvertImage = (arg) => {
•	  // argArr.forEach(item => (argFn(item) ? out.push(item) : null));
•	  const result = [];
•	  const flipImage = argFlip => result.push(argFlip.reverse());
•	  const invertImage = argInvert => argInvert.map(item => (item === 0 ? 1 : 0));
•	  // arg.map(elem => flipImage(elem)); // );
•	  // arg.forEach(elem => invertImage(elem));
•	  // return flipImage(arg);
•	  // return invertImage(arg);
•	
•	  arg.map(item => flipImage(item));
•	  return result.map(item => invertImage(item));
•	};
•	
•	console.log(flipAndInvertImage(arr));
•	// console.log(flipAndInvertImage([1, 1, 0]));
•	// Input:                               [[1,1,0],[1,0,1],[0,0,0]]
•	// Output: [[1,0,0],[0,1,0],[1,1,1]]
•	// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
•	// Then, invert the image:              [[1,0,0],[0,1,0],[1,1,1]]

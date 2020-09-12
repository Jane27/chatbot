export const handleNumberSequence = (numbers: string) => {
  const numberArr = numbers.replace(/(<\s)|(\s>)/g, "").split(" ");
  let odds: number[] = [];
  let evens: number[] = [];
  let ret: string = ``;

  for (let i = 0; i < numberArr.length; i++) {
    if (parseInt(numberArr[i]) % 2 === 1) {
      odds.push(parseInt(numberArr[i]));
    } else {
      evens.push(parseInt(numberArr[i]));
    }
  }
  //evens:ascending order
  evens.sort((a, b) => b - a);
  //odds : descending order
  odds.sort((a, b) => a - b);
  if (odds.length !== evens.length) {
    return `Sorry, I can't answer this number sequence question`;
  } else {
    for (let i = 0; i < odds.length; i++) {
      ret = `${ret}${evens[i] + odds[i]}${i!==odds.length-1?' ':''}`;
    }
    return `${ret}`;
  }
};

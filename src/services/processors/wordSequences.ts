export const handleWordSequence = (sentence: string) => {
  const vowelLetters = ["a", "e", "i", "o", "u"];
  const wordsCount = sentence.split(" ").filter((i) => i).length;
  const sentenceWithoutSpaces = sentence.replace(/ /g, "");

  let vowelLettersCount: number = 0;
  let consonantLetterCount: number = 0;

  for (let i = 0; i < sentenceWithoutSpaces.length; i++) {
    const letter = sentenceWithoutSpaces.charAt(i);
    if (vowelLetters.includes(letter)) {
      vowelLettersCount++;
    } else {
      consonantLetterCount++;
    }
  }

  return `${wordsCount}-${consonantLetterCount}-${vowelLettersCount}`;
};

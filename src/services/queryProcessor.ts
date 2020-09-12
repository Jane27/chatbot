import { handleMath } from "./processors/math";
import { handleQuestion } from "./processors/question";
import { handleWordSequence } from "./processors/wordSequences";

export const handleQuery = (q: string) => {
  if (/^[a-zA-Z\s]+\?$/.test(q) || q === `PING`) {
    return handleQuestion(q);
  } else if (/^(\d+[\+|\-\*\/])+\d+=\?$/.test(q.replace(/ /g, ""))) {
    return handleMath(q);
  } else if (/^[a-zA-Z\s]+$/.test(q)) {
    return handleWordSequence(q);
  } else {
    return "Unknow question pattern!";
  }
};

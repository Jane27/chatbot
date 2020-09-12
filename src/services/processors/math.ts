import { evaluate } from "mathjs";

export const handleMath = (expression: string) => {
  return evaluate(expression.split("=")[0]);
};

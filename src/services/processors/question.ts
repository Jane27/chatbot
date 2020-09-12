const questionDB = [
  { q: "PING", 
    a: "PONG" },
  {
    q: "What is your name?",
    a: "It is a secret",
  },
  {
    q: "What is your quest?",
    a: "coding",
  },
];

export const handleQuestion = (question: string) => {
  const ret = questionDB.find((entry) => entry.q === question);
  if (ret) {
    return ret.a;
  }else  {
    return `Sorry, I don't know this answer ~ ~!`;
  }
};

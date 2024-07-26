import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const zeroarray = new Array(8).fill(0);
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(zeroarray);
  const onVoteChange = () => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVote(newVote);
  };
  // 找到最大值
  const maxValue = Math.max(...vote);

  // 找到最大值的第一个索引
  const maxIndex = vote.indexOf(maxValue);
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {vote[selected]} votes</div>
      <div>
        <button onClick={onVoteChange}>vote</button>
      </div>
      <button onClick={() => setSelected(Math.floor(Math.random() * (8 + 1)))}>
        next anecdote
      </button>
      <div>
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[maxIndex]}</div>
      </div>
    </>
  );
};

export default App;

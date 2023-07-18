interface ChuckJokeProps {
  key: number;
  chuckJoke: string;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ chuckJoke }) => (
  <p>{chuckJoke}</p>
);

export default ChuckJoke;

import Counter from "./Counter";

// export const metadata = {
//   title: "Counter Game Page",
// };

export const metadata = {
  title: {
    absolute: "Counter Game Page",
  },
};

export const getRanNum = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function CounterPage() {
  const random = getRanNum(5);

  if (random < 2) {
    throw new Error("Error loading counter game");
  }

  return <Counter />;
}

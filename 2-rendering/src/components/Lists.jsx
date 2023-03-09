export const Lists = () => {
  const numbers = [1, 1, 2, 3, 5, 8, 13];

  const handleClick = (i) => {
    console.log("Du klickade på:", numbers[i]);
  };

  // n = numbers[i]
  const html = numbers.map((n, i) => {
    return (
      <li
        key={i}
        onClick={() => {
          handleClick(i);
        }}
      >
        {n}
      </li>
    );
  });

  return <ul>{html}</ul>;
};

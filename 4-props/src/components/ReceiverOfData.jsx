export function ReceiverOfData(props) {
  return (
    <span className="generic-text">
      {props.message} - {props.age}
    </span>
  );
}

export function ReceiverOfDataDesc({ message, age }) {
  return (
    <>
      {message} - {age}
    </>
  );
}

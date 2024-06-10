const CardWrapper = ({ innerComponent }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      {innerComponent}
    </div>
  );
};

export default CardWrapper;

export default function Button(props) {
  const handleClick = (evt) => {
    evt.preventDefault();
    props.getGif();
  };
  return (
    <div>
      <button onClick={handleClick}>Show Me A Gif!</button>
    </div>
  );
}

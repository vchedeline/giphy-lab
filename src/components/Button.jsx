export default function Button({getGif}) {
  const handleClick = (evt) => {
    evt.preventDefault();
    getGif();
  };
  return (
    <div>
      <button onClick={handleClick}>Show Me A Gif!</button>
    </div>
  );
}

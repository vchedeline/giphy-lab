export default function Display({ gif }) {
  const noImage = () => (
    <div className="display-area">
      <h2 id="placeholder">gEt ReAdY tO bE aMaZeD !</h2>
    </div>
  );

  const showImage = () => {
    return (
      <div className="display-area">
        <h2 id="gif-title">{gif.data.title || "Untitled"} </h2>
        <img src={gif.data.images.original.url} alt="..." />
      </div>
    );
  };

  return gif ? showImage() : noImage();
}

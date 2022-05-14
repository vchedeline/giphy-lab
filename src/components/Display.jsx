export default function Display({ gif }) {
  const noImage = () => {
    return <h1>Image Goes Here</h1>;
  };

  const showImage = () => {
    return (
      <div className="display-area">
        <h2>{gif.data.title || "Untitled"} </h2>
        <img src={gif.data.images.original.url} alt="..." />
      </div>
    );
  };

  return gif ? showImage() : noImage();
}

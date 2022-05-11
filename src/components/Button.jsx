export default function Button(props) {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.getGif(); 
  }
  return <div>
    <h1>Welcome to Giphy World</h1>
    <form onSubmit={handleSubmit}>
      <button type="submit">Random Gif</button>
    </form>
    
  </div>
}
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const API_KEY = "DejFpi6TdxRX3gZBGJXdk0WvaLSLlftV";

  const [gif, setGif] = useState(null);

  const getGif = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=`,
    );

    const data = await response.json();

    setGif(data);
  };
  return (
    <div className="App">
      <h1 id="title">Welcome To Giphy World</h1>
      <Button getGif={getGif} />
      <Display gif={gif} />
    </div>
  );
}

export default App;

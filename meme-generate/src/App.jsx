import './App.css';
import {useState, useEffect} from "react";
import Templates from './components/Templates';


function App() {

  const [templates, setTemplates]= useState([]);
  const [meme, setMeme]= useState(null);

  useEffect(() => 
      {
              fetch("https://api.imgflip.com/get_memes")
                  .then((res) => res.json())
                  .then((data) => 
                  {
                    setTemplates(data.data.memes);
                      console.log(data.data.memes);
                  });
        }, []);

  return (
    <div className="App">
      <div className="template">
        {templates.map((template) => (
          <div key={template.id} className="template">
            <div
              style={{ backgroundImage: `url(${template.url})` }}
              className="image"
            ></div>
          </div>
        ))}</div>
    </div>
  );
}

export default App;

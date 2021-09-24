import './App.css';
import ResultContainer from '../Components/Container/ResultContainer';
import DragNDrop from '../Components/DND/DragNDrop'
import SearchBar from '../Components/SearchBar/SearchBar';
import React,{useState} from 'react'


function App() {

  const [imageResult,setImageResult] = useState([])
  const handleCallback = (image) => {
    setImageResult(image)
    console.log(image)
}

  return (
    <div className="App">
      {/* Image Result : {imageResult.map(image=>(<p key={image.id}><a href={image.urls.small}>{image.alt_description}</a></p>))} */}
      {/* <SearchBar callValue = {handleCallback}/>
      {imageResult.id ? <hr/> : ''}
      <ResultContainer passValue={imageResult}/> */}
      <DragNDrop/>
    </div>
  );
}

export default App;

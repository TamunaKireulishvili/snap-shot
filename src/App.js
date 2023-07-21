import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/input';
import Navigation from './components/navigation/Navigation';
import ImageList from './components/pictures/ImageList';
function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const [searchedImage,setSearchedImage] = useState('')
  const handleSearch = async (inputValue)=>{

    setSearchedImage(inputValue)
    try {
      setLoading(true)
    const res = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${inputValue}&per_page=24&format=json&nojsoncallback=1`)
    const data = await res.json()
   
    setData(data.photos.photo)
   

  }
    catch(error){
      console.log(error)
    }
    finally{
      setLoading(false)
    }
    
  }
  return (
    <div className="App">
      <h1 className='snap-title'>Snap Shot</h1>
      <Search handleSearch={handleSearch}/>
      <Navigation  handleSearch={handleSearch}/>
      <p className='searched-images'>{searchedImage  + ' ' + 'Pictures'}</p>
      {loading ? <p>Loading...</p> : (
        <ImageList 
      loading = {loading} 
      data = {data}/>

      )}
    </div>
  );
}

export default App;

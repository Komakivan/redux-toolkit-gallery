import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { getPhotos } from './gallery.state';

function App() {
  
  const dispatch = useDispatch()
  const photos = useSelector(state => state.gallery.photos)

  

  useEffect(() => {
    dispatch(getPhotos())
  },[dispatch])



  return (
    <div className="App">
     <h1>PHOTO GALLERY</h1>
     <p>This is a photo gallery made using resuc toolkit and redux thunk</p>
     <hr></hr>
     <div className='gallery'>
       {photos.map(photo => 
        <img 
          key={photo.id}
          src={photo.download_url}
          alt={photo.author}
          width='300'
          height='300'
        />
       )}
     </div>
    </div>
  );
}

export default App;

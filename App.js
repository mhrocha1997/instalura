import React,  {Fragment, useEffect, useState} from 'react';
import {
  ScrollView, 
  FlatList
} from 'react-native';

import Header from './src/components/Header';
import Photo from './src/components/Photo';
import getPhotos from './src/api/feed';
import Comments from './src/components/Comments';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(()=>{
    getPhotos(setPhotos);
  }, [])

  return (
    <ScrollView>
      <FlatList 
        data={photos}
        keyExtractor={ (item) => item.id.toString()}
        renderItem={({ item }) => 
          <Fragment>
            <Header  
              username={item.userName}
              urlImage={item.userURL}
            />
            <Photo 
              urlPhoto={item.url}
              description={item.description}
              qteLikes={item.likes}
            />
            <Comments 
              comments={item.comentarios}
            />
          </Fragment>
        }
      />
    </ScrollView>
  );
}

export default App;
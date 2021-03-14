import React,  {Fragment, useState} from 'react';

import {
  Image, 
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const largura = Dimensions.get("screen").width;

const Photo = ({urlPhoto, description, qteLikes}) => {
  const [liked, setLiked] = useState(false);
  const [likes,setLikes] = useState(qteLikes);

  const likePhoto = ()=>{
    if(liked){
      setLikes(likes - 1);
    }else{
      setLikes(likes + 1);
    }
    setLiked(!liked);
  }
  return (
      <Fragment>
        <Image 
            source={{uri: urlPhoto}}
            style={styles.img}
        />
        <Text>{description}</Text>
        <View style={styles.viewLike}> 
          <TouchableOpacity onPress={likePhoto}>
            <Image 
              source={getLikeImg(liked)}
              style={styles.like}
            />
          </TouchableOpacity>
          <Text>{likes} curtidas</Text>
        </View>
        
        
      </Fragment>
        
  );
}

const getLikeImg = (liked) =>{
  if(liked){
    return require('../../res/img/s2-checked.png');
  }else{
    return require('../../res/img/s2.png');
  }
}

const styles = StyleSheet.create({
  img:{
    width: largura,
    height: largura
  },
  like:{
    width: 40,
    height: 40,
    margin: 5
  },
  viewLike:{
    flexDirection: "row",
    alignItems: "center",
  }

});

export default Photo;
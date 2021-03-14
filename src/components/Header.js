import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  View
} from 'react-native';


export default Header = ({ username, urlImage, description }) =>{
    return (
      <View style={styles.header}>
        <Image 
          source={{ uri: urlImage }}
          style={styles.img}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  img:{
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 30,
  },
  header:{
    flexDirection: "row",
    alignItems: "center",
  }
});

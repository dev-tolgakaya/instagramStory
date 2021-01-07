import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class Story extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.sectionContainer}>
        <View style={{  justifyContent:'center',alignItems:'center' }}>
          <Image style={styles.cover} source={require('../Assets/StoryAvatars/1.jpg')}
          />
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('StoriesCard')}>
          <Text style={{position:'absolute',bottom:200}}>tolga</Text>
          </TouchableOpacity>
        </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
  },
  cover: {
   width:600,
    height : 1000
  }
})

export default Story;

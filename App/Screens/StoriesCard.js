import React, { Component } from "react";
import { Thumbnail } from "native-base";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";


class StoriesCard extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <View style={{ height: 120 }}>
          <View style={styles.storySectionLabel}>
            <Text style={{ fontWeight: "bold" }}>Stories</Text>
            <Text style={{ fontWeight: "bold" }}>Watch All</Text>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingStart: 5,
                paddingEnd: 5,
              }}
            >
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Story')}>
                <View style={styles.thumbnailContainer}>
                  <Thumbnail
                    style={styles.thumbnailStyle}
                    source={require("../Assets/StoriesHeaderThumbnails/1.jpg")}
                  />
                  <Text style={styles.thumbnailText}>GizemDlbe</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Story',{selectedImage : 2})}>
                <View style={styles.thumbnailContainer}>
                  <Thumbnail
                    style={styles.thumbnailStyle}
                    source={require("../Assets/StoriesHeaderThumbnails/2.jpg")}
                  />
                  <Text style={styles.thumbnailText}>ttlga.kaya</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Story',{selectedImage : 2})}>
                <View style={styles.thumbnailContainer}>
                  <Thumbnail
                    style={styles.thumbnailStyle}
                    source={require("../Assets/StoriesHeaderThumbnails/3.jpg")}
                  />
                  <Text style={styles.thumbnailText}>mirasTll</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
  storySectionLabel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7,
  },
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnailStyle: {
    marginHorizontal: 5,
    borderColor: "pink",
    borderWidth: 2,
  },
  thumbnailText: {
    fontSize: 10,
  },
});

export default StoriesCard;

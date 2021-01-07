import React, {useState} from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';
import Story from "./Story";

const SCREEN_WIDTH = Dimensions.get('window').width;

const StoriesCard = (props) => {
    const {user} = props;
    const {stories = []} = user || {};
    const [isModelOpen, setModel] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const story = stories.length ? stories[currentIndex] : {};

    const changeStory = (e) => {
        if (e.locationX > SCREEN_WIDTH / 2) {
            nextStory();
        } else {
            previousStory();
        }
    }
    const nextStory = () => {
        if (stories.length - 1 > currentIndex) {
            setCurrentIndex(currentIndex + 1)
        }
        else{
           props.onStoryNext()
        }
    }

    const previousStory = () => {
        if(currentIndex > 0 && stories.length){
            setCurrentIndex(currentIndex-1)
        }
        else{
            setCurrentIndex(0);
            props.onStoryPrevious()
        }
    }

    const swipeDown = () => {
        if (!isModelOpen) {
            props.onClose();
        } else {
            setModel(false)
        }
    }
    /*         BU KISMI READMORE'U YAPTIKTAN SONRA AKTiF ET
        const swipeUp = () => {
         if (!isModelOpen && isReadMore) {
                setModel(true);
            }
        }
    */
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    }


    return (
        <GestureRecognizer
            onSwipeDown={swipeDown}
            /* onSwipeUp = {swipeUp}*/
            config={config}
            style={styles.container}
        >
            {/*<Image style={{width: '100%', height: '100%'}} source={require('../Assets/StoryAvatars/3.jpg')}/>*/}
            <TouchableOpacity
                activeOpacity={1}
                delayLongPress={500}
                onPress={e => changeStory(e.nativeEvent)}  //NATIVE EVENT SOR ??
                style={styles.container}
            >
                <View style={styles.container}>
                    <Story story={story}/>
                </View>
            </TouchableOpacity>
        </GestureRecognizer>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // paddingTop: 30,
        backgroundColor: 'red',
    },
    progressBarArray: {
        flexDirection: 'row',
        position: 'absolute',
        top: 30,
        width: '98%',
        height: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userView: {
        flexDirection: 'row',
        position: 'absolute',
        top: 55,
        width: '98%',
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: '500',
        marginLeft: 12,
        color: 'white',
    },
    time: {
        fontSize: 12,
        fontWeight: '400',
        marginTop: 3,
        marginLeft: 12,
        color: 'white',
    },
    content: {
        width: '100%',
        height: '100%',
    },
    loading: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width: '100%',
        height: '90%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bar: {
        width: 50,
        height: 8,
        backgroundColor: 'gray',
        alignSelf: 'center',
        borderRadius: 4,
        marginTop: 8,
    },
});

export default StoriesCard;

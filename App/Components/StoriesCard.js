import React, {useState} from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';

const StoriesCard = (props) => {
    const {user} = props;
    const {stories = []} = user || {};
    const [isModelOpen, setModel] = useState(false)


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
            <Image style={{width: 500, height: 500}} source={require('../Assets/StoryAvatars/3.jpg')}/>

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
    content: { width: '100%',
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

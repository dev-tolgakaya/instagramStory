import React, {useRef, useEffect, useState} from "react";
import {Image, StyleSheet, Modal, TouchableOpacity, View, Text, FlatList} from 'react-native';
import {CubeNavigationHorizontal} from 'react-native-3dcube-navigation';
import StoriesCard from "../Components/StoriesCard";
import AllStories from "../Assets/AllStories";

const Stories = (props) => {
    const [isModalOpen, setModal] = useState(false);
    const [currentUserIndex, setCurrentUserIndex] = useState(0);
    const [currentScrollValue, setCurrentScrollValue] = useState(0);
    const modalScroll = useRef(null);


    const onStorySelect = (index) => {
        setCurrentUserIndex(index);
        setModal(true);
    }
    const onStoryClose = () => {
        setModal(false);
    }

     const onStoryPrevious = (isScroll) => {
         const newIndex = currentUserIndex - 1;
         if (currentUserIndex > 0) {
             setCurrentUserIndex(newIndex)
             if (!isScroll) {
                 modalScroll.current.scrollTo(newIndex, true)
             }
         }
     }
     const onStoryNext = (isScroll) => {
         const newIndex = currentUserIndex + 1;
         if (AllStories.length - 1 > currentUserIndex) {
             setCurrentUserIndex(newIndex)
             if (!isScroll) {
                 modalScroll.current.scrollTo(newIndex, true);
             }
         } else {
             setModal(false)
         }
     }

    const onScrollChange = (scrollValue) => {
        if (currentScrollValue > scrollValue) {
            onStoryNext(true)
            setCurrentScrollValue(scrollValue)
        }
        if (currentScrollValue < scrollValue) {
            onStoryPrevious(true);
            setCurrentScrollValue(scrollValue)
        }

    }

    return (
        <View style={styles.sectionContainer}>
            <View style={{height: 120}}>
                <View style={styles.storySectionLabel}>
                    <Text style={{fontWeight: "bold"}}>Stories</Text>
                    <Text style={{fontWeight: "bold"}}>Watch All</Text>
                </View>
                <FlatList
                    data={AllStories}
                    horizontal
                    renderItem={({item, index}) => (
                        <TouchableOpacity onPress={() => onStorySelect(index)}>
                            <Image
                                style={styles.circle}
                                source={{uri: item.profile}}
                            />
                        </TouchableOpacity>
                    )}
                />

                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={isModalOpen}
                    onRequestClose={onStoryClose}
                    onShow={() => {
                        if (currentUserIndex > 0) {
                            modalScroll.current.scrollTo(currentUserIndex, false);  //BU KISMI SOR CURRENT ?
                        }
                    }}
                >
                    <CubeNavigationHorizontal
                        ref={modalScroll}
                        responderCaptureDx={120}
                        callBackAfterSwipe={scrollValue => onScrollChange(scrollValue)}>
                        {
                            AllStories.map((item,index)=>(
                                <StoriesCard
                                    onClose = {onStoryClose}
                                    onStoryNext = {onStoryNext}
                                    onStoryPrevious = {onStoryPrevious}
                                    user = {item}
                                    isNewStory = {index !== currentUserIndex}
                                />
                            ))
                        }
                    </CubeNavigationHorizontal>
                </Modal>
            </View>
        </View>
    )

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
    circle: {
        marginHorizontal: 5,
        borderColor: "pink",
        borderWidth: 2,
        width: 60,
        height: 60,
        borderRadius: 50

    }
})

export default Stories;

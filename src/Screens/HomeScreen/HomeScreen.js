import React from "react"
import { View, Text, FlatList } from "react-native"

// Import Componets
import VideoListItem from "../../components/VideoListItem/VideoListItem"

// Import Data
import Video from "../../Assets/Data/videos.json"

const HomeScreen = () => {
    // console.log("Videos", Video)
    return (
        <View>
            <FlatList
                data={Video}
                keyExtractor={(_, key) => key.toString()}
                renderItem={(items) => <VideoListItem data={items} />}
            />
        </View>
    )
}

export default HomeScreen

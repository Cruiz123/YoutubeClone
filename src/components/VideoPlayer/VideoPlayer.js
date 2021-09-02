import React, { useRef } from "react"
import { View, Text, StyleSheet } from "react-native"

// Import Components
import Video from "react-native-video"

const VideoPlayer = ({ data }) => {
    console.log("data", data)
    const videoRef = useRef(null)
    return (
        <View>
            <Video
                ref={videoRef}
                selectedVideoTrack={{ type: "disabled" }}
                resizeMode="cover"
                playInBackground={true}
                controls
                // muted
                paused
                playWhenInactive={true}
                source={{ uri: data }}
                style={styles.containerVideo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerVideo: {
        width: "100%",
        aspectRatio: 16 / 9,
    },
})

export default VideoPlayer

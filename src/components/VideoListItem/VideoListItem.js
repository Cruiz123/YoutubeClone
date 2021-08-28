import React from "react"
import { View, Text, Image } from "react-native"

// Import Components
import Icon from "react-native-vector-icons/Entypo"

// Import Hooks
import useStyles from "../../Hooks/useStyles.hook"

// Import Styles
import { VideoListItemStyles } from "../../Styles/ComponentsStyles/index"

const VideoListItem = (props) => {
    const styles = useStyles(VideoListItemStyles)
    const { item } = props.data

    const minutes = Math.floor(item.duration / 60)
    const seconds = item.duration % 60

    let viewsString = item.views.toString()
    if (item.views > 1_000_000) {
        viewsString = (item.views / 1_000_000).toFixed(2) + "M"
    } else if (item.views > 1_000) {
        viewsString = (item.views / 1_000).toFixed(2) + "K"
    }

    return (
        <View>
            <View style={styles.videoCard}>
                <View>
                    <Image
                        style={styles.thumbnail}
                        source={{
                            uri: item.thumbnail,
                        }}
                    />
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>
                            {minutes}:{seconds < 10 ? "0" : ""}
                            {seconds}
                        </Text>
                    </View>
                </View>

                <View style={styles.titleRow}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: item.user.image,
                        }}
                    />

                    <View style={styles.midleContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>
                            {item.user.name} {viewsString} {item.createAt}
                        </Text>
                    </View>

                    <Icon name="dots-three-vertical" size={18} color="white" />
                </View>
            </View>
        </View>
    )
}

export default VideoListItem

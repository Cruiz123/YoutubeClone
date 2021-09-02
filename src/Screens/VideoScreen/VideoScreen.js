import React from "react"
import {
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    FlatList,
} from "react-native"

// Import Data
import Video from "../../Assets/Data/videos.json"
import dataVideo from "../../Assets/Data/video.json"

// Import Components
import Icon from "react-native-vector-icons/AntDesign"
import { Colors, RFValue } from "../../Utils/constants"
import VideoListItem from "../../components/VideoListItem/VideoListItem"
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"

// Import Hooks
import useStyles from "../../Hooks/useStyles.hook"

// Import Styles
import { VideoScreenStyles } from "../../Styles/ScreensStyles/index"

const VideoScreen = () => {
    const styles = useStyles(VideoScreenStyles)

    const minutes = Math.floor(dataVideo.duration / 60)
    const seconds = dataVideo.duration % 60

    let viewsString = dataVideo.views.toString()
    if (dataVideo.views > 1_000_000) {
        viewsString = (dataVideo.views / 1_000_000).toFixed(2) + "M"
    } else if (dataVideo.views > 1_000) {
        viewsString = (dataVideo.views / 1_000).toFixed(2) + "K"
    }

    return (
        <View style={styles.containerPrincipal}>
            {/* <Image
                style={styles.videoPlayer}
                source={{
                    uri: dataVideo.thumbnail,
                }}
            /> */}
            <VideoPlayer data={dataVideo.videoUrl} />

            <View style={styles.videoInfoContainer}>
                <Text style={styles.tags}>{dataVideo.tags}</Text>
                <Text style={styles.title}>{dataVideo.title}</Text>
                <Text style={styles.subtitle}>
                    {dataVideo.user.name} {viewsString} {dataVideo.createAt}
                </Text>
            </View>

            <View style={styles.actionListContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.actionListItem}>
                        <Icon name="like1" size={RFValue(30)} color="white" />
                        <Text style={styles.actionText}>{dataVideo.likes}</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <Icon
                            name="dislike2"
                            size={RFValue(30)}
                            color="white"
                        />
                        <Text style={styles.actionText}>{dataVideo.likes}</Text>
                    </View>
                    <View style={styles.actionListItem}>
                        <Icon
                            name="export"
                            size={RFValue(30)}
                            color="lightgrey"
                        />
                        <Text style={styles.actionText}>
                            {dataVideo.dislikes}
                        </Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <Icon
                            name="download"
                            size={RFValue(30)}
                            color="lightgrey"
                        />
                        <Text style={styles.actionText}>
                            {dataVideo.dislikes}
                        </Text>
                    </View>

                    <View style={styles.actionListItem}>
                        <Icon
                            name="download"
                            size={RFValue(30)}
                            color="lightgrey"
                        />
                        <Text style={styles.actionText}>
                            {dataVideo.dislikes}
                        </Text>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.userInfoContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri: dataVideo.user.image }}
                />

                <View style={styles.info}>
                    <Text style={styles.titleInfo}>{dataVideo.user.name}</Text>
                    <Text style={styles.subscribers}>
                        {dataVideo.user.subscribers} subscribers
                    </Text>
                </View>

                <Text style={styles.titleSubscribe}>Subscribe</Text>
            </View>

            <View style={styles.containerComments}>
                <Text style={styles.titleComments}>Comments 333</Text>
                <View style={styles.containerUsercomments}>
                    <Image
                        style={styles.avatarComments}
                        source={{ uri: dataVideo.user.image }}
                    />

                    <Text style={styles.titleInfoCommets}>
                        Lorem ipsum dolor sit amet, consectet asdafcas kaskd
                        aksdkaskd kwqkaskdk
                    </Text>
                </View>
            </View>
        </View>
    )
}

const VideoScreenWithRecomendations = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={Video}
                keyExtractor={(_, key) => key.toString()}
                renderItem={(items) => <VideoListItem data={items} />}
                ListHeaderComponent={VideoScreen}
            />
        </SafeAreaView>
    )
}

export default VideoScreenWithRecomendations

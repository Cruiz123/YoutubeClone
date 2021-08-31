import { Colors, RFValue } from "../../../Utils/constants"

export default {
    containerPrincipal: {
        flex: 1,
    },
    videoPlayer: {
        width: "100%",
        aspectRatio: 16 / 9,
    },
    videoInfoContainer: {
        margin: RFValue(10),
    },
    title: {
        color: "white",
        fontSize: RFValue(18),
        fontWeight: "500",
        marginVertical: RFValue(10),
    },
    tags: {
        color: "#0094e3",
        fontSize: RFValue(14),
        fontWeight: "500",
    },
    subtitle: {
        color: Colors.colorGray,
        fontSize: RFValue(14),
        fontWeight: "500",
    },

    // action list
    actionListContainer: {
        flexDirection: "row",
        marginVertical: RFValue(10),
    },
    actionListItem: {
        width: RFValue(70),
        height: RFValue(60),
        justifyContent: "space-around",
        alignItems: "center",
    },
    actionText: {
        color: Colors.colorWhite,
        fontSize: RFValue(14),
    },
    avatar: {
        width: RFValue(50),
        height: RFValue(50),
        borderRadius: RFValue(25),
    },
    userInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: RFValue(10),
        borderColor: "#3d3d3d",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    info: {
        marginHorizontal: RFValue(10),
        flex: 1,
    },
    titleInfo: {
        color: Colors.colorWhite,
        fontSize: RFValue(18),
        fontWeight: "bold",
    },
    titleSubscribe: {
        color: Colors.colorRed,
        fontSize: RFValue(18),
        fontWeight: "bold",
        padding: RFValue(10),
    },
    subscribers: {
        color: Colors.colorGray,
        fontSize: RFValue(18),
    },
    containerComments: {
        // flex: 1,
        padding: RFValue(10),
        marginVertical: RFValue(10),
        // backgroundColor: "red",
    },
    titleComments: {
        color: Colors.colorWhite,
        fontSize: RFValue(12),
    },
    containerUsercomments: {
        // flex: 1,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
        marginHorizontal: RFValue(5),
    },
    avatarComments: {
        width: RFValue(35),
        height: RFValue(35),
        borderRadius: RFValue(20),
    },
    titleInfoCommets: {
        color: Colors.colorWhite,
        fontSize: RFValue(12),
        fontWeight: "bold",
        marginLeft: RFValue(10),
    },
}

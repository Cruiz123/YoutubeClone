import { Colors, RFValue } from "../../../Utils/constants"

export default {
    thumbnail: {
        width: "100%",
        aspectRatio: 16 / 9,
    },
    timeContainer: {
        backgroundColor: "#00000099",
        height: RFValue(25),
        width: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(4),
        position: "absolute",
        right: RFValue(5),
        bottom: RFValue(5),
    },
    time: {
        color: Colors.colorWhite,
        fontWeight: "500",
    },
    avatar: {
        width: RFValue(50),
        height: RFValue(50),
        borderRadius: RFValue(25),
    },
    titleRow: {
        flexDirection: "row",
        padding: RFValue(10),
    },
    midleContainer: {
        marginHorizontal: RFValue(10),
        flex: 1,
    },
    title: {
        color: Colors.colorWhite,
        fontSize: RFValue(18),
        fontWeight: "500",
        marginBottom: RFValue(5),
    },
    subtitle: {
        color: Colors.colorGray,
        fontSize: RFValue(14),
        fontWeight: "500",
    },
}

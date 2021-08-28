import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Import Screens
import HomeScreen from "../Screens/HomeScreen/HomeScreen"
import SubscriptionScreen from "../Screens/SubscriptionScreen/SubscriptionScreen"

const Tab = createBottomTabNavigator()

const TabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                }}
            />
            <Tab.Screen name="Subscription" component={SubscriptionScreen} />
        </Tab.Navigator>
    )
}

export default TabScreen

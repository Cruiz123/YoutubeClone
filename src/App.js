import React from "react"
import { NavigationContainer, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Import Screens
import TabScreen from "./Navigation/index"
import VideoScreen from "./Screens/VideoScreen/VideoScreen"

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator
                initialRouteName="Video"
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={TabScreen} />
                <Stack.Screen name="Video" component={VideoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

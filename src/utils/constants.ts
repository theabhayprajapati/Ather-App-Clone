import { TextStyle } from "react-native/types";

export const BUTTON_HEIGHT = 50;

export const PADDING = {
    primary: 20,
}
export const FONTS = {
    "PlusJakartaSans-Light": require("../assets/fonts/Plus_Jakarta_Sans/static/Light.ttf"),
    "PlusJakartaSans-LightItalic": require("../assets/fonts/Plus_Jakarta_Sans/static/LightItalic.ttf"),
    "PlusJakartaSans-Medium": require("../assets/fonts/Plus_Jakarta_Sans/static/Medium.ttf"),
    "PlusJakartaSans-MediumItalic": require("../assets/fonts/Plus_Jakarta_Sans/static/MediumItalic.ttf"),
    "PlusJakartaSans-Regular": require("../assets/fonts/Plus_Jakarta_Sans/static/Regular.ttf"),
    "PlusJakartaSans-SemiBold": require("../assets/fonts/Plus_Jakarta_Sans/static/SemiBold.ttf"),
    "PlusJakartaSans-SemiBoldItalic": require("../assets/fonts/Plus_Jakarta_Sans/static/SemiBoldItalic.ttf"),
    "PlusJakartaSans-Bold": require("../assets/fonts/Plus_Jakarta_Sans/static/Bold.ttf"),
    "PlusJakartaSans-BoldItalic": require("../assets/fonts/Plus_Jakarta_Sans/static/BoldItalic.ttf"),
    "PlusJakartaSans-ExtraBold": require("../assets/fonts/Plus_Jakarta_Sans/static/ExtraBold.ttf"),
    "PlusJakartaSans-ExtraBoldItalic": require("../assets/fonts/Plus_Jakarta_Sans/static/ExtraBoldItalic.ttf"),
    "PlusJakartaSans-ExtraLight": require("../assets/fonts/Plus_Jakarta_Sans/static/ExtraLight.ttf"),
    "PlusJakartaSans-ExtraLightItalic": require("../assets/fonts/Plus_Jakarta_Sans/static/ExtraLightItalic.ttf"),
    "PlusJakartaSans-Italic": require("../assets/fonts/Plus_Jakarta_Sans/static/Italic.ttf")
}

// type of stylesheet


type fontStyles = TextStyle

export const REGULARFONT: fontStyles = {
    fontFamily: "PlusJakartaSans-Regular",
}
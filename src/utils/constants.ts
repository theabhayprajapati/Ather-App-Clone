import { ViewStyle } from "react-native/types";

export const BUTTON_HEIGHT = 50;

export const PADDING = {
    primary: 20,
    secondary: 40   ,
    small: 10,
    medium: 16,
}
export const MARGIN = {
    primary: 20,
    secondary: 40,
    small: 10,
    medium: 16,
}
export const SECTION: ViewStyle = {
    marginTop: 20,
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

export const FONT_FAMILY = {
    regular: "PlusJakartaSans-Regular",
    medium: "PlusJakartaSans-Medium",
    semiBold: "PlusJakartaSans-SemiBold",
    bold: "PlusJakartaSans-Bold",
    extraBold: "PlusJakartaSans-ExtraBold",
    light: "PlusJakartaSans-Light",
    extraLight: "PlusJakartaSans-ExtraLight",
    italic: "PlusJakartaSans-Italic",
    lightItalic: "PlusJakartaSans-LightItalic",
    mediumItalic: "PlusJakartaSans-MediumItalic",
    semiBoldItalic: "PlusJakartaSans-SemiBoldItalic",
    boldItalic: "PlusJakartaSans-BoldItalic",
    extraBoldItalic: "PlusJakartaSans-ExtraBoldItalic",
    extraLightItalic: "PlusJakartaSans-ExtraLightItalic",
};

export const FONT = {
    regular: { fontFamily: FONT_FAMILY.regular },
    medium: { fontFamily: FONT_FAMILY.medium },
    semiBold: { fontFamily: FONT_FAMILY.semiBold },
    bold: { fontFamily: FONT_FAMILY.bold },
    extraBold: { fontFamily: FONT_FAMILY.extraBold },
    light: { fontFamily: FONT_FAMILY.light },
    extraLight: { fontFamily: FONT_FAMILY.extraLight },
    italic: { fontFamily: FONT_FAMILY.italic },
    lightItalic: { fontFamily: FONT_FAMILY.lightItalic },
    mediumItalic: { fontFamily: FONT_FAMILY.mediumItalic },
    semiBoldItalic: { fontFamily: FONT_FAMILY.semiBoldItalic },
    boldItalic: { fontFamily: FONT_FAMILY.boldItalic },
    extraBoldItalic: { fontFamily: FONT_FAMILY.extraBoldItalic },
    extraLightItalic: { fontFamily: FONT_FAMILY.extraLightItalic },
};

// const generateRandomColor = () => {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const generateColor = (salt) => {
    const hue = (parseInt(salt, 16) % 360) / 360; // Use salt value to determine hue
    const saturation = 0.6; // Set saturation to a constant value
    const lightness = 0.5; // Set lightness to a constant value
    const color = `hsl(${hue * 360}, ${saturation * 100}%, ${lightness * 100}%)`; // Combine values into HSL format
    return color;
};

export const COLORS = {
    primary: "#262D37",
    secondary: "#262D3799",
    white: "#FFFFFF",
    gray: "#F2F2F2",
    blue: "#1E4B8A",
    lightgray: '#E9EDF3',
    tabBar: "rgba(38, 45, 55, 0.9)",
    tabBarActive: "#ffffff",
    tabBarInactive: "#8D99B0",
    title: '#2C333D',
    randomColors: generateColor,
}

export const flexaligncenter: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
}

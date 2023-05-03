export function hexWithOpacity(hexColor: string, percent: number) {
    // Convert the percentage to a decimal value
    // if hexColor starts with #, remove it
    if (hexColor.startsWith("#")) {
        hexColor = hexColor.substring(1);
    }
    
    var opacity = percent / 100;

    // Convert the hexadecimal color code to RGB format
    var red = parseInt(hexColor.substring(0, 2), 16);
    var green = parseInt(hexColor.substring(2, 4), 16);
    var blue = parseInt(hexColor.substring(4, 6), 16);

    // Set the alpha value based on the specified percentage
    var alpha = Math.round(opacity * 255);

    // Convert the RGB and alpha values to a new hexadecimal color code
    var rgba = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
    var hexWithOpacity = "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1) + alpha.toString(16).toUpperCase();

    return hexWithOpacity;
}

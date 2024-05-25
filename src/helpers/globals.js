export function isDark(hexColor) {
  if (hexColor?.length !== 7 || hexColor.indexOf("#") !== 0) {
    console.log("Not hex");
    return;
  }
  const color = hexColor.substring(1);
  const red = parseInt(color.substr(0, 2), 16);
  const green = parseInt(color.substr(2, 2), 16);
  const blue = parseInt(color.substr(4, 2), 16);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  return brightness < 155;
}

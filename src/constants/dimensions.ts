import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const dimensions = {
  screenHeight: screenHeight,
  screenWidth: screenWidth,
  pageView: screenHeight / 2.64,
  pageViewContainer: screenHeight / 3.84,
  pageDetailsContainer: screenHeight / 2,
  pageViewTextContainer: screenHeight / 7.03,
  itemTopPlaceHeight4: screenHeight / 3.5,
  itemTopPlaceHeight5: screenHeight / 5,

  //?dynamic height padding and margin
  height2: screenHeight / 264.8,
  height10: screenHeight / 88.4,
  height15: screenHeight / 56.27,
  height20: screenHeight / 44.2,
  height30: screenHeight / 29.47,
  height35: screenHeight / 25.2,
  height40: screenHeight / 22.1,
  height45: screenHeight / 19.64,
  height50: screenHeight / 17.68,
  height55: screenHeight / 15.98,
  height60: screenHeight / 14.73,
  height65: screenHeight / 13.6,
  height70: screenHeight / 12.48,
  height80: screenHeight / 11.05,
  height100: screenHeight / 8.84,
  height220: screenHeight / 4.2,
  height250: screenHeight / 3.84,
  height270: screenHeight / 3.38,
  height300: screenHeight / 3.07,
  heihgt350: screenHeight / 2.64,


  //?dynamic width padding and margin
  widtht2: screenHeight / 264.8,
  widtht5: screenHeight / 176.8,
  widtht10: screenHeight / 88.4,
  widtht15: screenHeight / 56.27,
  widtht20: screenHeight / 44.2,
  widtht30: screenHeight / 29.47,
  widtht35: screenHeight / 25.2,
  widtht40: screenHeight / 22.1,
  widtht45: screenHeight / 19.64,
  widtht50: screenHeight / 17.68,
  widtht55: screenHeight / 15.98,
  widtht60: screenHeight / 14.73,
  widtht65: screenHeight / 13.6,
  widtht70: screenHeight / 12.48,
  widtht80: screenHeight / 11.05,
  widtht100: screenHeight / 8.84,
  widtht220: screenHeight / 4.2,
  widtht250: screenHeight / 3.84,

  fontSize20: screenHeight / 44.2,
  fontSize22: screenHeight / 40.2,
  fontSize16: screenHeight / 56.27,
  fontSize14: screenHeight / 64.4,
  fontSize12: screenHeight / 73.6,
  fontSize18: screenHeight / 49.23,
  fontSize26: screenHeight / 34.15,
  fontSize30: screenHeight / 29.47,
  fontSize35: screenHeight / 25.2,
  fontSize40: screenHeight / 22.1,
  fontSize50: screenHeight / 17.68,
  fontSize80: screenHeight / 11.05,
  lableWelcome: screenWidth / 6,

  //?dynamic border radius
  borderRadius5: screenHeight / 176.8,
  borderRadius10: screenHeight / 88.4,
  borderRadius15: screenHeight / 56.27,
  borderRadius20: screenHeight / 44.2,
  borderRadius30: screenHeight / 29.47,
  // icon size
  iconSize16: screenHeight / 56.27,
  iconSize20: screenHeight / 44.2,
  iconSize24: screenHeight / 37.04,

  // list view 
  listViewImageSize: screenWidth / 3.25,
  listViewTextContentSize: screenWidth / 3.9,

  //  popular food detail
  homeAuthImageSize: screenHeight / 1.5,
  loginPageImageSize: screenHeight / 2,
  registerPageImageSize: screenHeight / 3.5,

  // bottom height
  bottomHeightBar: screenHeight / 7.03,

  //  splash screen dimensions
  splashImg: screenHeight / 3.38,
  loginImg: screenHeight / 4,

}
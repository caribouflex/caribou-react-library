/**Primary color */
const white = "#FFFFFF";
const underlaymentGray = "#F5F5F5";
const blizzardGray = "#EBEBEB";
const ink = "#333333";
const actionBlue = "#0A99D5";
const nightSky = "#485865";

/**Secondary color */
const selectedBlue = "#15B1F4";
const hoverBlue = "#53C7F7";
const selectedNightSky = "#333E48";
const hoverNightSky = "#556777";
const goodGreen = "#61BB46";
const cautionRed = "#EE3123";
const metricOrange = "#FC9014";
const attentionYellow = "#FCB414";
const marketingPurple = "#673AB7";
const silver = "#D6D6D6";
const darkGrey = "#999999";

/**Map Primaries */
const smoke = "#E0E0E0";
const platinum = "#CCCCCC";
const cementGrey = "#C2C2C2";
const transparent = "transparent";


module.exports = {

    primaryColor: actionBlue,
    fontColor: nightSky,
    linkColor: actionBlue,

    /** Button */
    primaryButtonColor: actionBlue,
    primaryButtonHoverColor: hoverBlue,
    primaryButtonSelectedColor: selectedBlue,
    primaryButtonBorderColor: null, //if null it will follow the button state color
    primaryButtonFontColor: white,
    secondaryButtonColor: transparent,
    secondaryButtonHoverColor: hoverNightSky,
    secondaryButtonSelectedColor: selectedNightSky,
    secondaryButtonBorderColor: nightSky,
    secondaryButtonFontColor: this.fontColor,

    /** State color */
    cautionColor: cautionRed,
    warningColor: metricOrange,
    successColor: goodGreen,
    attentionColor: attentionYellow,
}
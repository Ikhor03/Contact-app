import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedContact, item) => ({
    flex : 1,
    justifyContent: "space-between",
    alignItems : 'center',
    flexDirection: 'row',
    padding: SIZES.medium,
    backgroundColor: selectedContact === item.id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.small,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    margin : '2px'
  }),
  logoContainer: (selectedContact, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedContact === item.id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  secondaryText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  primaryText: (selectedContact, item) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: selectedContact === item.id ? COLORS.white : COLORS.primary,
  }),
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  }
});

export default styles;

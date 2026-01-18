import { StyleSheet, Text, View } from "react-native";

const Greet = ({ name, age }) => {
  return (
    <View>
        <Text style={[styles.box, styles.boxNameColor, styles.boxShadow]}>
          Hi there, {name}
        </Text>
        <Text style={[styles.box, styles.boxAgeColor, styles.androidShadow]}>
          I am {age} years old
        </Text>
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({
  // container: {flex: 1},
  box: {
    width: "100%",
    height: "30%",
    padding: 20,
    fontWeight: "700",
    textAlign: "center",
    paddingHorizontal: 5,
    paddingVertical: "40%",
  },
  boxNameColor: { color: "pink", backgroundColor: "yellow" },
  boxAgeColor: { color: "yellow", backgroundColor: "pink", marginTop: 30 },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  androidShadow: {
    elevation: 10, //for android shadow shadow offset only work on ios
  },
});

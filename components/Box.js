import { StyleSheet, View } from "react-native";

const Box = ({ bg }) => {
  return (
      <View style={[styles.box, { backgroundColor:  bg }]}></View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "20%",
    height: "20%",
    // marginTop: "5%"
  },
});

export default Box;

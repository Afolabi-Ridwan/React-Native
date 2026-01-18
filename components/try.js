import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, Platform } from "react-native";

const Try = () => {

  const [deviceDimensions, setDeviceDimensions] = useState({
    window: Dimensions.get("window")
  })

  useEffect(() => {
    const control = Dimensions.addEventListener("change", ({window}) => {
      setDeviceDimensions({window})
    })

    return () => control?.remove();
  })
  const ios = Platform.OS === "ios"

  const deviceWidth = deviceDimensions.window.width
  const deviceHeight = deviceDimensions.window.height

  return (
    <View style={styles.container}>
      <View style={[styles.textContainer, {
        width: deviceWidth < 500 ? "90%" : "60%",
        height: deviceHeight < 200 ? "90%" : "40%"
      }]}>
        <Text style={[styles.text, {
          color:  ios ? "blue" : "black"
        }]}>Welcome Sir/Ma</Text>
      </View>
    </View>
  );
};

export default Try;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
    
  },
  text: {
    ...Platform.select({
      web: {
        textDecorationStyle: "dashed",
        fontStyle: "italic",
        color: "yellow"
      }
    }),
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

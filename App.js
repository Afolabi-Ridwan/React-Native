import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Greet from "./components/Greet";
import Try from "./components/try";
import Button from "./components/Button";

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
    });
    return () => subscription?.remove();
  });

  const { window } = dimensions;

  const widthDimension = window.width;
  const heightDimension = window.height;

  console.log(widthDimension, heightDimension);

  return (
    <View style={styles.container}>
      {/* <View
        style={[
          styles.box,
          {
            width: widthDimension < 500 ? "90%" : "20%",
            height: heightDimension > 890 ? "40%" : "100%",
          },
        ]}
      >
        <Text style={{ fontSize: widthDimension > 500 ? 48 : 24 }}>
          {" "}
          Welcome!{" "}
        </Text>
      </View> */}

      <Try/>
      <Button press={() => alert("Pressed!")} text="Click Here"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    padding: 10
    // justifyContent: "center",
    // alignItems: "center",
  },

  box: {
    // width: widthDimension > 1000 ? 600 : "100%",
    // height: heightDimension > 890 ? 400 : "100%",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    // fontSize: widthDimension > 500 ? 48 : 24,
  },
});

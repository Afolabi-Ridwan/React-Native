import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import logoImg from "./assets/adaptive-icon.png";
import Greet from "./components/Greet";
import Box from "./components/Box";

export default function Practice() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusBarVisible, setIsStausBarVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 20 }}>
      {/* <ScrollView>
        <Text> */}
      <Button
        title="Click"
        color={"midnightblue"}
        onPress={() => setIsModalVisible(true)}
        onLongPress={() => console.log("Long Press works!")}
      />
      {/* <Greet name={"Afolabi Ridwan"} age={29} /> */}
      <View style={styles.boxContainer}>
        <Box bg="red" />
        <Box bg="blue" />
        <Box bg="green" />
        <Box bg="yellow" />
        <Box bg="red" />
        <Box bg="blue" />
        <Box bg="green" />
        <Box bg="yellow" />
      </View>
      <Modal
        visible={isModalVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
      >
        <View style={{ flex: 1, backgroundColor: "blue", padding: 100 }}>
          <Text>Modal is open</Text>
          <Button
            onPress={() => setIsModalVisible(false)}
            title="Close Modal"
          />
        </View>
      </Modal>
      <StatusBar
        barStyle={"dark-content"}
        animated
        hidden={isStatusBarVisible}
      />
      <Button
        title="Toggle Status Bar"
        onPress={() => setIsStausBarVisible((prev) => !prev)}
      />
      <ActivityIndicator />
      <ActivityIndicator size={"large"} color={"green"} />
      <Button title="Alert" onPress={() => Alert.alert("Invalid input!")} />
      <Button
        title="Alert 2"
        onPress={() =>
          Alert.alert("Invalid input!", "", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel clicked!"),
            },
            { text: "Ok", onPress: () => console.log("Ok clicked!") },
          ])
        }
      />
      {/* </Text>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    // flex: 1,
    borderColor: "white",
    borderWidth: 2,
    height: "40%",
    width: "auto",
    // alignContent: "space-evenly",
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 10
    // flexDirection: "column"
    //flexShrink: 1,
    //flexBasis: 
  }
})
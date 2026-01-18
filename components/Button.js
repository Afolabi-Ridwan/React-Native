import { Pressable, StyleSheet, View, Text, Platform } from "react-native";

const Button = ({press, text}) => {
  return (
    <Pressable onPress={press} style={{alignItems: "center"}}>
      <Text style={styles.button}> {text} </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    
    button: {
        ...Platform.select({
        ios:{
            fontStyle: "italic"
        },
        web:{
            color: "red",
            fontSize: 20,
        }
    }),
        backgroundColor: "lightblue",
        textAlign: "center",
        width: "50%",
        padding: 10
    }
});

export default Button;

import { Image, StyleSheet, View } from "react-native";

export default function GameScreean() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("@/assets/images/wall2.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(247, 247, 247)",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

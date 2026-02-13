import MovingBackground from "@/components/MovingBackground";
import { StyleSheet, View } from "react-native";

export default function GameScreean() {
  return (
    <View style={styles.container}>
      <MovingBackground />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(247, 247, 247)",
  },
});

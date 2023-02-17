import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddddd" }}
        onPress={props.onDelete.bind(null, props.goal.id)}
        style={({ pressed }) => {
          return pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalItemText}>{props.goal.goal}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "white",
  },
  goalItemText: {
    color: "black",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;

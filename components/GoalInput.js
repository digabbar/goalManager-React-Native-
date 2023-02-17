import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Modal,
  Text,
} from "react-native";
const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const addGoalHandler = () => {
    if (enteredGoalText.trim().length === 0) {
      return;
    }
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  return (
    <Modal visible={props.show} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.actionsBtn}>
          <Pressable style={styles.button} onPress={props.onCancel}>
            <Text style={styles.text}>Cancel</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={addGoalHandler}>
            <Text style={styles.text}>Add Goal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#46566A",
  },
  textInput: {
    width: "90%",
    backgroundColor: "white",
    color: "black",
    fontSize: 24,
    padding: 8,
  },
  actionsBtn: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginHorizontal: 4,
    width: 150,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  modal: {
    backgroundColor: "#46566A",
  },
});

export default GoalInput;

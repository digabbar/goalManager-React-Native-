import { StyleSheet, View, Pressable, FlatList, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { useState } from "react";
export default function App() {
  const [goals, setGoals] = useState([]);
  const [showGoalInput, setGoalInput] = useState(false);
  const addGoalHandler = (enteredText) => {
    setGoals((prev) => {
      return [
        ...prev,
        {
          id: Math.random().toString(),
          goal: enteredText,
        },
      ];
    });
    cancelGoalInputHandler();
  };
  const showGoalInputHandler = () => {
    setGoalInput(true);
  };
  const cancelGoalInputHandler = () => {
    setGoalInput(false);
  };
  const deleteGoalHandler = (id) => {
    setGoals((prevState) => {
      return prevState.filter((goal) => {
        return goal.id !== id;
      });
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Pressable style={styles.button} onPress={showGoalInputHandler}>
          <Text style={styles.text}>ADD NEW GOALS</Text>
        </Pressable>

        <GoalInput
          onAddGoal={addGoalHandler}
          show={showGoalInput}
          onCancel={cancelGoalInputHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem goal={itemData.item} onDelete={deleteGoalHandler} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    overflow: "scroll",
  },

  goalsContainer: {
    flex: 5,
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
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

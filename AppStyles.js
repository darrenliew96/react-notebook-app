import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: "#e8eaed",
    },
  
    container: {
      flex: 1,
      marginHorizontal: 30,
      marginTop: 50,
    },
  
    calenderWrapper: {
      marginTop: 50,
      justifyContent: "center",
      alignItems: "center",
    },
  
    calender: {
      padding: 20,
      borderRadius: 30,
    },
  
    tasksWrapper: {
      paddingTop: 60,
    },
  
    sectionTitle: {
      fontSize: 24,
      fontWeight: "700",
    },
  
    buttonText: {
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
    },
  
    writeTaskWrapper: {
      position: "absolute",
      bottom: 60,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: "#96c7ff",
      borderRadius: 60,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#9cc9fc",
      borderWidth: 1,
    },
  
    input: {
      paddingVertical: 15,
      paddingHorizontal: 20,
      width: 250,
      backgroundColor: "#fff",
      borderRadius: 60,
      borderColor: "#c0c0c0",
      borderWidth: 1,
      textAlign: "center",
    },
  });
  
  export default styles;
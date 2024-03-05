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
  
    titleWrapper: {
      paddingTop: 60,
      marginHorizontal: 30,
      flexDirection: "row",
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
  
    writeInputWrapper: {
      position: "absolute",
      bottom: 60,
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
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
    resetWrapper: {
      width: 30,
      height: 30,
      marginLeft: 20,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
  export default styles;
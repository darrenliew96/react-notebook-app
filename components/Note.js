import { View, Text, StyleSheet, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


const Note = (props) => {
    return(
        <View style={styles.item}>
            <Text> {props.text}</Text>   
        </View>
    )
};

const style= StyleSheet.create({
    
});

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    
});

export default Note;
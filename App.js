import React from "react";
import {
  Platform,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { BackHandler } from "react-native";
import { Calendar } from "react-native-calendars";
import styles from "./AppStyles";

const currentDate = new Date();

export default function App() {
  const [showHealthCheck, setShowHealthCheck] = useState(false);
  const [selectedDate, setSelectedDate] = useState(false);


  useEffect(() => {
    const backAction = () => {
      if (showHealthCheck) {
        setShowHealthCheck(false);
        setSelectedDate(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [showHealthCheck]);

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.container}>
        {/* Today's Health */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Simple Health Tracker</Text>
        </View>
        <View style={styles.calenderWrapper}>
          <Calendar
            style={styles.calender}
            onDayPress={(day) => {
              setShowHealthCheck(true);
              setSelectedDate(day.dateString);
            }}
            enableSwipeMonths={true}
            markedDates={{
              [selectedDate]: {selected: true, marked: false, selectedColor: 'lightblue'}
            }}
          />
        </View>
      </View>

      {showHealthCheck && (
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
          >
            <TextInput
              style={styles.input}
              placeholder={"Add a new health check"}
            />
            <TouchableOpacity>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      )}
    </View>
  );
}

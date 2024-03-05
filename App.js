import React from "react";
import {
  Platform,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
import { BackHandler } from "react-native";
import { Calendar } from "react-native-calendars";
import styles from "./AppStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const currentDate = new Date();

export default function App() {
  const [showHealthCheck, setShowHealthCheck] = useState(false);
  const [selectedDate, setSelectedDate] = useState(false);
  const [healthChecks, setHealthChecks] = useState({});

  useEffect(() => {
    const loadHealthChecks = async () => {
      try {
        const savedHealthChecks = await AsyncStorage.getItem("healthChecks");
        if (savedHealthChecks !== null) {
          setHealthChecks(JSON.parse(savedHealthChecks));
          console.log(savedHealthChecks);
        }
      } catch (error) {
        // Error retrieving data
        console.log(error);
      }
    };

    loadHealthChecks();

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

  // Handle text change and save the data to async storage

  const handleTextChange = (text) => {
    setHealthChecks((prevHealthChecks) => {
      const newHealthChecks = {
        ...prevHealthChecks,
        [selectedDate]: text,
      };

      AsyncStorage.setItem("healthChecks", JSON.stringify(newHealthChecks));

      return newHealthChecks;
    });
  };

  const resetData = async () => {
    setHealthChecks({});
    await AsyncStorage.removeItem("healthChecks");
  };

  // Logics to check for object keys and values, and merge with selected date

  const markedDates = Object.keys(healthChecks).reduce((acc, date) => {
    if (healthChecks[date] !== "") {
      acc[date] = { marked: true };
    }
    return acc;
  }, {});

  console.log(markedDates);

  markedDates[selectedDate] = {
    ...markedDates[selectedDate],
    selected: true,
    selectedColor: "lightblue",
  }; // merge with selected date

  // Return the UI for the health tracker
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.titleWrapper}>
        <Text style={styles.sectionTitle}>Simple Health Tracker</Text>
        <TouchableOpacity
          style={styles.resetWrapper}
          title="Reset Data"
          onPress={resetData}
        >
          <Icon name="lock-reset" size={30} color="#900" />
        </TouchableOpacity>
      </View>

      <View style={styles.calenderWrapper}>
        <Calendar
          style={styles.calender}
          onDayPress={(day) => {
            setShowHealthCheck(true);
            setSelectedDate(day.dateString);
          }}
          enableSwipeMonths={true}
          markedDates={markedDates}
        />
        <Text>{healthChecks[selectedDate]}</Text>
      </View>

      {showHealthCheck && (
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeInputWrapper}
          >
            <TextInput
              style={styles.input}
              placeholder={"Add a new health check"}
              onChangeText={handleTextChange}
              value={healthChecks[selectedDate]}
            />
            {/* <TouchableOpacity>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity> */}
          </KeyboardAvoidingView>
        </View>
      )}
    </View>
  );
}

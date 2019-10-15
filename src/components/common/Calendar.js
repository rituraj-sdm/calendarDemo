import React from 'react';
import { ReactNative } from "react-native";
import { View, Text, Image } from "react-native";
import { Calendar } from 'react-native-calendars';

const CalendarComponent = props => {
    let {
        current,
        hideExtraDays,
        firstDay,
        hideDayNames,
        showWeekNumbers,
    } = props
    var today = new Date();
    return (
        <Calendar
        current={today}
        onDayPress={(day) => {console.log('selected day', day)}}
        onDayLongPress={(day) => {console.log('selected day', day)}}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {console.log('month changed', month)}}
        hideExtraDays={false}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={true}
        showWeekNumbers={true}
        />
    );
};

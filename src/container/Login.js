import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import {connect} from "react-redux"
import TextInput from '../components/common/TextInput';
import Button from '../components/common/Button';
import { Calendar } from 'react-native-calendars';
import RNCalendarEvents from 'react-native-calendar-events';
import moment from 'moment';
import { Alert } from "react-native";
import { Common } from '../helper/common';
import Dialog from "react-native-dialog";
import {push} from "../actions";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            selectedDate: {},
            isDialogVisible: false,
            title:"",
            selectedDay:null,
            error:""
        };
    }
    
    onSave = () => {
        this.props.push(
            this.props.componentId, "Home"
        );
    }

    hideDialog = () => {
        this.setState({isDialogVisible: false});
    }

    addEventCalender = async () => {
        let {selectedDay,title}=this.state;
        this.hideDialog();
        var currentDate = moment(selectedDay);
        var lastDate = moment(selectedDay);
        let details = {
            title: "Add your event",
            startDate: moment(currentDate).toISOString(),
            endDate: moment(lastDate).toISOString()
        };
        try {
            let response = await RNCalendarEvents.saveEvent(
                title,
                details
            );
            if (response) {
                Alert.alert(
                    'Spark',
                    'Event Added Successfully',
                    [
                        {
                            text: 'OK', onPress: () => {

                            }
                        },

                    ],
                    { cancelable: false }
                )
            }
        } catch (err) {
            console.log("added error =>>>>>>>>>", err)
            alert(err); // TypeError: failed to fetch
        }
    }
 
    handleEmail = (title) => {
        if(!title.length){
            return this.setState({error:"Please Enter Title"})
        }
        this.setState({title})
    }

    addEvent = () => {
        Alert.alert(
            'Spark',
            'Wants to add event in your calendar',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                {
                    text: 'OK', onPress: () => {
                        this.setState({isDialogVisible: true})
                        // this.addEventCalender(title, details);
                    }
                },

            ],
            { cancelable: false }
        )
    }

     addEventToDeviceCal = (day) => {
        var date = moment(day.timestamp).format("YYYY-MM-DD");
        var currentDate = {};
        currentDate[date] = { selected: true, marked: true, selectedColor: 'blue' };
        this.setState({ selectedDate: currentDate, selectedDay:day.timestamp }, () => {
            RNCalendarEvents.authorizationStatus().then(status => {
                if (status !== "authorized") {
                    RNCalendarEvents.authorizeEventStore()
                        .then(status => {
                            this.addEvent()
                        })
                        .catch(error => {
                            console.warn("error : ", error)
                        });
                } else {
                    this.addEvent();
                }
            }).catch(e => console.warn("error : ", e));
        })

    };

    render = () => {
        console.log("state", this.state);

        return (
            <View style={{ flex: 1, backgroundColor: '#4EE2EC' }}>
                <View style={{ flex: 0.2, marginTop: 50, justifyContent: 'center', marginHorizontal: 30 }}>
                    <Text style={{ fontSize: 45, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Spark</Text>
                    <Text style={{ top: 10, fontSize: 25, color: 'white', textAlign: 'center' }}>Please add your event and enjoy your favourite activity</Text>
                </View>
                <View style={{ flex: 0.5, backgroundColor: '#4EE2EC', marginTop: 20, justifyContent: 'center', paddingHorizontal: 30, }}>
                    <Calendar
                        current={new Date()}
                        onDayPress={this.addEventToDeviceCal}
                        onDayLongPress={(day) => { console.log('selected day', day) }}
                        monthFormat={'yyyy MM'}
                        onMonthChange={(month) => { console.log('month changed', month) }}
                        hideExtraDays={false}
                        disableMonthChange={true}
                        firstDay={1}
                        hideDayNames={true}
                        showWeekNumbers={true}
                        markedDates={this.state.selectedDate}
                    />
                   <View>
                    <View>
                            <Dialog.Container visible={this.state.isDialogVisible}>
                                <Dialog.Title>Add your event</Dialog.Title>
                                <Dialog.Input onChangeText={this.handleEmail}
                                ></Dialog.Input>
                                <Dialog.Button label="Cancle" onPress={this.hideDialog} />
                                <Dialog.Button label="OK" onPress={this.addEventCalender} />
                            </Dialog.Container>
                        </View>
                    </View>
                    <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeHolderText="Please enter your email"
                        placeHolderColor="red"
                    />
                    <View style={{ height: 30, width: '100%' }}></View>
                    <TextInput
                        value={this.state.password}
                        placeHolderText="Please enter your password"
                        placeHolderColor="red"
                        maximumLength={6}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Button
                        style={{ width: 300, backgroundColor: 'red', }}
                        Text="Save"
                        onPress={this.onSave}
                    />

                </View>
            </View>
        )
    }
}

const mapDispatchToProps={
push
}

const mapStateToProps=(state)=>({
    app:state.app,
    user:state.user
})

export default connect(mapStateToProps,mapDispatchToProps)(Login);
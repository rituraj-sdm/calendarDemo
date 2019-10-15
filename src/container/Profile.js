import React, {useState} from "react";
import {View,Text} from "react-native";
import {useDispatch,useSelector} from "react-redux";
import {push} from "../actions";
const Profile=()=>{
    let [name, setName]=useState(""); //hook
    let isLogin=useSelector(state=>state.user.isLogin);
    let dispatch=useDispatch();
    return(
        <View>
            <Text onPress={()=>setName("Profile")}>{name}</Text>
            <Text onPress={()=>dispatch(push("1","abc"))}>{name}</Text>
        </View>
    )
}

export default Profile;
import { func } from "prop-types";
import React from "react";
import { View } from "react-native";

export default function App(){
    return(
        <View style = {{
            backgroundColor: "white",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexWrap: "wrap",
        }}>
            <View style={{
                backgroundColor: "blue",
                width: 100,
                height: 100,
                // alignSelf: "flex-start",
            }}/>
            <View style={{
                backgroundColor: "gold",
                width: 100,
                height: 100,
            }}/>
            <View style={{
                backgroundColor: "tomato",
                width: 100,
                height: 100,
            }}/>
            <View style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
            }}/>
            <View style={{
                backgroundColor: "green",
                width: 100,
                height: 100,
            }}/>
        </View>
    );
}
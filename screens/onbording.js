import { View, Text } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
const onbording = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/bg.png")}
                style={styles.image}>
                <Image source={require("../assets/logo2.png")} style={{ marginTop: 300 }} />
                <Text style={{ fontSize: 48, color: "#FFF", width: 250, textAlign: "center", }}>
                    Welcome to our store
                </Text>
                <Text style={{ fontSize: 16, color: "#FCFCFCB2", marginTop: 10, }}>
                    Ger your groceries in as fast as one hour
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#FFF9FF', fontSize: 18, }}>Get Started</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 300, height: 67,
        backgroundColor: "#53B175",
        padding: 10,
        marginTop: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default onbording;

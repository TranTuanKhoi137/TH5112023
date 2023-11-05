import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/MaskGroup.png')} />
            <View style={{marginLeft:20}}>
                <Text style={{ fontSize: 26, color: "#030303", width: 250 }}>Get your groceries with nectar</Text>
                <TextInput></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#FFF9FF', fontSize: 18, }}>Continue with Googke</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#FFF9FF', fontSize: 18, }}>Continue with Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
})
export default SignIn
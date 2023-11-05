import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'

const splashScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent:"center", backgroundColor: "#53B175", alignItems: "center",}}>
            <Image source={require('../assets/logo.png')}/>
            <Text style={{color:"#FFFFFF", fontSize: 14, letterSpacing:6, position:"absolute",top:410,left:133}}>online groceriet</Text>
        </View>
    )
}

export default splashScreen
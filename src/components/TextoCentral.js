import React from 'react'
import { View, Text } from 'react-native'

export default props => {
    <View style = {{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        }}>

        <Text style = {{ fontSize: 50,}}>
            {props.children}
        </Text>
    </View>
}
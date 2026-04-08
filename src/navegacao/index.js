import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Stack'

export default props => {
    return (
        
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </SafeAreaView>
    )
}


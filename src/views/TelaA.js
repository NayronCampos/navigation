import React from 'react'
import { View, Text, Button } from 'react-native'
import TextoCentral from '../components/TextoCentral'
import PassoStack from '../components/PassoStack'

export default props => {

    return (
        <PassoStack {...props} avancar = "TelaB">
            <TextoCentral corFundo = 'red'>
                Tela A
            </TextoCentral>
        </PassoStack>

    )
}
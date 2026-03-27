import { Text, TouchableOpacity } from 'react-native'

export default function Button(props){
    return (
        <TouchableOpacity 
            onPress={() => { props.onRoute() }}
        >
            <Text>{props.routeName}</Text>
        </TouchableOpacity>
    )
}
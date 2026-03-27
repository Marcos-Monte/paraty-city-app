import { Text, TouchableOpacity, View } from 'react-native'
import routes from '../../routes'

const otherRoutes = routes.filter(route => route.name !== 'Tela Inicial')

export default function Home(props){
    return (
        <View>
            <Text>Home</Text>
            {otherRoutes.map((route, index) => (
                <TouchableOpacity 
                    key={index}
                    onPress={() => { props.navigation.navigate(`${route.name}`)}}
                >
                    <Text>{route.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}
import { Text, View } from 'react-native'
import routes from '../../routes'
import Button from '../ui/Button'

export default function Home(props){
    const otherRoutes = routes.filter(route => route.name !== 'Tela Inicial')
    return (
        <View>
            <Text>Home</Text>
            {otherRoutes.map((route, index) => (
                <Button
                    key={index}
                    routeName={route.name} 
                    onRoute={() => props.navigation.navigate(`${route.name}`)}
                />
            ))}
        </View>
    )
}
import { Image, Text, View } from "react-native";
import Photo from '../../assets/01.png';
import routes from "../../routes";
import Button from "../ui/Button";
import styles from "./styles";

export default function Home(props) {
    const otherRoutes = routes.filter((route) => route.name !== "Inicio");
    return (
        <View style={styles.pageContainer}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Paraty</Text>
                <Text style={styles.cardSubtitle}>Saiba o que visitar em paraty.</Text>
                <Image
                    style={styles.photo}
                    source={Photo}
                />
                <View>
                    {otherRoutes.map((route, index) => (
                        <Button
                            key={index}
                            routeName={route.name}
                            onRoute={() => props.navigation.navigate(`${route.name}`)}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
}

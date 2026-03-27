import { Image, Text, View } from "react-native"
import styles from "./styles"

export default function Card(props) {
    return (
        <View style={styles.cardContainer}>
            <Image
                style={styles.img}
                source={props.img}
            />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.priceText}</Text>
            <Text style={styles.text}>{props.locText}</Text>
        </View>
    )
}
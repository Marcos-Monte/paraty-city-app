import { Image, Text, View } from "react-native"
import styles from "./styles"

export default function Card(props) {
    return (
        <View style={styles.cardContainer}>
            {
                props.superTitle && <Text style={styles.superTitle}>{props.superTitle}</Text>
            }
            <Image
                style={styles.image}
                source={props.img}
            />
            {
                props.title && <Text style={styles.title}>{props.title}</Text>
            }
            {
                props.priceText && <Text style={styles.text}>{props.priceText}</Text>
            }
            {
                props.locText && <Text style={styles.text}>{props.locText}</Text>
            }
        </View>
    )
}
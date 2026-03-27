import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Button(props) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                props.onRoute();
            }}
        >
            <Text style={styles.title}>ver {props.routeName}</Text>
        </TouchableOpacity>
    );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 10,
        gap: 10,
    },
    image: {
        width: '100%',
        height: 60,
        borderRadius: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 900,
    },
    text: {
        fontSize: 12,
        fontWeight: 200,
        lineHeight: 10,
    },
})

export default styles;
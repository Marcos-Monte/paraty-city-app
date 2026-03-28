import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 80,
        borderRadius: 4,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 900,
        marginBottom: 10,
    },
    superTitle: {
        fontSize: 20,
        fontWeight: 900,
        marginBottom: 10,
        textAlign: 'center',
        width: '100%',
    },
    text: {
        fontSize: 12,
        fontWeight: 200,
        lineHeight: 14,
    },
})

export default styles;
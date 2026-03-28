import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#beceff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        gap: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cardSubtitle: {
        fontSize: 14,
        fontWeight: 200,
        textAlign: 'center'
    },
    photo: {
        width: '100%',
        height: '40%',
        borderRadius: 4,
    }
})

export default styles;
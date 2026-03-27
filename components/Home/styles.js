import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#e2e3e5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
        gap: 10,
        width: '100%',
        justifyContent: 'space-around',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    cardSubtitle: {
        fontSize: 16,
        fontWeight: 200,
        textAlign: 'center'
    },
    photo: {
        width: '100%',
        height: '40%',
        borderRadius: 4,
    }
});

export default styles;
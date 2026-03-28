import { ScrollView, Text, View } from "react-native";
import { restaurantCards } from "../../data/cards";
import Card from "../ui/Card";
import styles from "./styles";

export default function Restaurants() {
    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.pageContainer}
        >
            <Text style={styles.cardTitle}>Bares e Restaurantes</Text>
            <Text style={styles.cardSubtitle}>
                O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.
            </Text>
            <View style={styles.cardsContainer}>
                {restaurantCards.map((acc, index) => (
                    <Card
                        key={index}
                        img={acc.img}
                        title={acc.title}
                        locText={acc.locText}
                    />
                ))}
            </View>
        </ScrollView>
    );
}

import { ScrollView, Text, View } from "react-native";
import { accommodationCards } from "../../data/cards";
import styles from "../../style/styles";
import Card from "../ui/Card";

export default function Accommodation() {
  return (
    <ScrollView
      style={{ flex: 1 }} 
      contentContainerStyle={[styles.pageContainer, { backgroundColor: '#beceff' }]}
    >
        <Text style={styles.cardTitle}>Pousadas e Hotéis em Paraty</Text>
        <Text style={styles.cardSubtitle}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>
        <View style={styles.cardsContainer}>
          {accommodationCards.map((acc, index) => (
            <Card
              key={index}
              img={acc.img}
              title={acc.title}
              priceText={acc.priceText}
              locText={acc.locText}
            />
          ))}
        </View>
    </ScrollView>
  );
}

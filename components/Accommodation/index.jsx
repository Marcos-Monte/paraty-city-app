import { Text, View } from "react-native";
import { accommodationCards } from "../../routes/data/cards";
import Card from "../ui/Card";
import styles from "./styles";

export default function Accommodation() {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.cardTitle}>Pousadas e Hotéis em Paraty</Text>
      <Text style={styles.cardSubtitle}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>
      <View>
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
    </View>
  );
}

import { ScrollView, Text, View } from "react-native";
import { tourCards } from "../../data/cards";
import styles from "../../style/styles";
import Card from "../ui/Card";

export default function Tours() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={[styles.pageContainer, { backgroundColor: '#f4fcc3' }]}
    >
      <Text style={styles.cardTitle}>Passeios em Paraty</Text>
      <Text style={styles.cardSubtitle}>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja dois exemplos:</Text>
      <View style={styles.cardsContainer}>
        {tourCards.map((acc, index) => (
          <Card
            key={index}
            img={acc.img}
            superTitle={acc.superTitle}
          />
        ))}
      </View>
    </ScrollView>
  );
}

import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function LessonCard({ title, description, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={{ color: "#5eb240"}}>{title}</Text>
      <Text style={styles.cardTitle}>{description}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  card: {
      padding: 10,
      borderRadius: 10,       
      borderWidth: 1, 
      width: 200,
      aspectRatio: 1/1,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'whitesmoke',
  },
  cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
  }, 
  image: {
      height: "60%",
      aspectRatio: 1/1,
      resizeMode: 'contain'
    }
})
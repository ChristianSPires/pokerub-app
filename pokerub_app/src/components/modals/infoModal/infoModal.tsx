import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { style } from "./infoModal.styles";

const InfoModal = ({
  visible,
  onClose,
  pokemonType,
  height,
  weight,
  category,
  abilities,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      transparent={true}
    >
      <View style={style.modalContainer}>
        <View style={style.modalContent}>
          <Text style={style.modalTitle}>Eevee Info</Text>
          <Text style={style.modalText}>Type: {pokemonType}</Text>
          <Text style={style.modalText}>Height: {height}</Text>
          <Text style={style.modalText}>Weight: {weight}</Text>
          <Text style={style.modalText}>Category: {category}</Text>
          <Text style={style.modalText}>Abilities: {abilities.join(", ")}</Text>
          <TouchableOpacity style={style.button} onPress={onClose}>
            <Text style={style.textButton}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;

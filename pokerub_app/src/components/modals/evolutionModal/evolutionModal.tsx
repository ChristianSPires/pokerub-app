import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { style } from "./evolutionModal.styles";
import EvolutionCard from "../../evolutionCard/evolutionCard";

const EvolutionModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      transparent={true}
    >
      <View style={style.modalContainer}>
        <View style={style.modalContent}>
          <Text style={style.modalTitle}>Eevee Evolutions</Text>
          <EvolutionCard />
          <EvolutionCard />
          <EvolutionCard />
          <TouchableOpacity style={style.button} onPress={onClose}>
            <Text style={style.textButton}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EvolutionModal;

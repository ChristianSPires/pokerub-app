import React from "react";
import { Modal, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./evolutionModal.styles";
import EvolutionCard from "../../evolutionCard/evolutionCard";
import { capitalize } from "../../../utils/strings";
import { useCurrentPokemonChain } from "../../../context/currentPokemonChain";

const EvolutionModal = ({ visible, onClose, evolutionChain }) => {
  const { name } = useCurrentPokemonChain();

  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      transparent={true}
    >
      <View style={style.modalContainer}>
        <View style={style.modalContent}>
          <ScrollView>
            {evolutionChain && (
              <>
                <Text style={style.modalTitle}>
                  {capitalize(name)}'s Evolution Chain
                </Text>
                <View style={style.evolutionCardsBox}>
                  {evolutionChain.evolves_to.length > 1 ? (
                    evolutionChain.evolves_to.map((evolution) => (
                      <EvolutionCard
                        key={evolution.species.name}
                        beforeEvolution={evolutionChain.species.name}
                        afterEvolution={evolution.species.name}
                      />
                    ))
                  ) : (
                    <EvolutionCard
                      beforeEvolution={evolutionChain.species.name}
                      afterEvolution={evolutionChain.evolves_to[0].species.name}
                    />
                  )}
                  {evolutionChain.evolves_to.map((chain) =>
                    chain.evolves_to.length > 0
                      ? chain.evolves_to.map((subEvolution) => (
                          <EvolutionCard
                            key={subEvolution.species.name}
                            beforeEvolution={chain.species.name}
                            afterEvolution={subEvolution.species.name}
                          />
                        ))
                      : null
                  )}
                </View>
              </>
            )}
            <TouchableOpacity style={style.button} onPress={onClose}>
              <Text style={style.textButton}>CLOSE</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default EvolutionModal;

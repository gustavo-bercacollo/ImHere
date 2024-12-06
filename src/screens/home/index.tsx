import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { TextInputMask } from "react-native-masked-text";


export function Home() {
  const [participants, setParticipants] = useState<{id: string, name: string}[]>([]);
  const [participantName, setParticipantName] = useState("");  
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [focusName, setFocusName] = useState(false) 
  

  function handleParticipantAdd() {
    if(participantName.trim() === ""){
      return Alert.alert("Nome invalido", "O nome do participante não pode estar vazio.")
    }

    const newParticipant = {
      id: `${Date.now()}`+ `${Math.floor(Math.random() * 1000)}`,   
      name: participantName.trim(),  
    };
    
    
    setParticipants(prevState => [...prevState, newParticipant]);
    setParticipantName("");
  }

  
  function handleParticipantRemove(name: string, id: string) {
    Alert.alert("", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => participants.filter(participant => participant.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }


  return (
    <View style={styles.container}>

          <TextInput
            style={styles.eventName}
            value={eventName}
            onChangeText={setEventName}
            placeholder="Nome do Evento"
            placeholderTextColor={focusName ? "#6B6B6B" : "#ffff"}
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(false)}
            maxLength={60}
            multiline={true}
          />
      
      <TextInputMask
        style={styles.eventDateInput} 
        type={"custom"}
        options={{
          mask: "99/99/9999"
        }}
        value={eventDate}
        onChangeText={setEventDate}
        placeholder="Data do evento (dd/mm/yyyy)" 
        placeholderTextColor="#6B6B6B"
        keyboardType="numeric"
      />



      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />
        
        <TouchableOpacity 
        style={styles.button} 
        onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.counter}>
        Participantes: {participants.length}
      </Text>

      <FlatList
        data={participants}
        keyExtractor={user => user.id}
        renderItem={({item}) => (
          <Participant 
            key={item.id} 
            name={item.name} 
            onRemove={() => handleParticipantRemove(item.name, item.id)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  );
}

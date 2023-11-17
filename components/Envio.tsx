import { Text, View } from "../components/Themed";
import { StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import { supabase } from '../lib/supabase'



export default function AddPostForm() {
  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");

  const fechaActual = new Date();

  const [contentDate, setContentDate] = useState(fechaActual);
 
  const envio = async()=>{
    console.log("envio de datos supabase")
    const { error } = await supabase
  .from('Viajes')
  .insert({ Destino: content, Km: content2, Notas: content3, fecha: fechaActual })

    
  }
  return (
    <View style={styles.container}>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />
      <TextInput
        value={content2}
        onChangeText={setContent2}
        style={styles.input}
      />
      <TextInput
        value={content3}
        onChangeText={setContent3}
        style={styles.input}
      />
      <Button
        title="Publicar"
        onPress={envio}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    color: "white"
  },
});

// hola aqui estoy
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";
import { Box, Heading, AspectRatio, Image, Center, HStack,Progress, Stack, NativeBaseProvider } from "native-base";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgDXZb6nK-qQbhSXTWw6sXsw0vlEfeq-k",
  authDomain: "baza-b7831.firebaseapp.com",
  databaseURL: "https://baza-b7831-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "baza-b7831",
  storageBucket: "baza-b7831.appspot.com",
  messagingSenderId: "577502833455",
  appId: "1:577502833455:web:43dec7c44d9fd3a66ecfda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getDatabase(app);

function App() {
  const[value,setValue] = useState('');
  const[d3,setD3] = useState(false);
  const[d2,setD2] = useState(false);
  const[d1,setD1] = useState(false);

  useEffect(()=>{
    const starCountRef = ref(db, '/message');

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
  
      setValue(data);
    });
    
  },[])

  useEffect(()=>{
  
    if (value?.indexOf('d3') === 0 ){

      if (value?.indexOf('0.00') === 5){
   
         setD3(true);
     }
        
      else
       {
       setD3(false);
  
        
    }
    
  }
  if (value?.indexOf('d2') === 0 ){

    if (value?.indexOf('0.00') === 5){
 
       setD2(true);
   }
      
    else
     {
     setD2(false);

      
  }
  
}
if (value?.indexOf('d1') === 0 ){

  if (value?.indexOf('0.00') === 5){

     setD1(true);
 }
    
  else
   {
   setD1(false);

    
}

}
  },[value])

  return (
    <View style={styles.container}>
      
   
      <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://w.wallhaven.cc/full/gj/wallhaven-gj92p7.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            Parking meter by Alfarabi
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Parking meter
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
     
            
            </Text>
          </Stack>

          {
          d1
          ?
          <>
          <Text>1</Text>
          <Progress colorScheme="emerald" value={100} />
          <Text>1 бос</Text>
          </>
          :
          <>
          <Text>1</Text>
          <Progress colorScheme="red" value={100} />
          <Text>1 бос емес</Text>
          </>
        }
          {
          d2
          ?
          <>
          <Text>2</Text>
          <Progress colorScheme="emerald" value={100} />
          <Text>2 бос</Text>
          </>
          :
          <>
          <Text>2</Text>
          <Progress colorScheme="red" value={100} />
          <Text>2 бос емес</Text>
          </>
        }
        {
          d3
          ?
          <>
          <Text>3</Text>
          <Progress colorScheme="emerald" value={100} />
          <Text>3 бос</Text>
          </>
          :
          <>
          <Text>3</Text>
          <Progress colorScheme="red" value={100} />
          <Text>3 бос емес</Text>
          </>
        }

 
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
               Parking
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
          <App />
      </Center>
    </NativeBaseProvider>
  );
};
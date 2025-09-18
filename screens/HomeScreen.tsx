import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
 
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
 
export default function HomeScreen({navigation} : Props)
{
    return(
        <View style ={styles.container}>
            <Text style = {styles.text}>This is my home screen.</Text>
 
            <Button title = "Go to details" onPress={() => navigation.navigate('Details')}/>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 20,
        marginBottom: 20,
    },
});
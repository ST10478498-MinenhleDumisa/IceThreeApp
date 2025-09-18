import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
 
type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;
 
export default function DetailScreen({navigation} : Props)
{
    return(
        <View style ={styles.container}>
            <Text style = {styles.text}>This is my Details screen.</Text>
 
            <Button title = "Back to home" onPress={() => navigation.navigate('Home')}/>
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
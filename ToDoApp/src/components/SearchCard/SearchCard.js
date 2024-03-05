import React from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from './SearchCard.styles';

const SearchCard = props => {


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                value={props.text}
                onChangeText={props.setText}
                placeholder="Search..." 
            />
            <View >
                <TouchableOpacity style={props.text.length>0 ? styles.button2 : styles.button} onPress={props.onClick}> 
                    <Text style={styles.text2}>Kaydet</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    );
};

export default SearchCard;
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

import Button from '../components/Button';

function Welcome({navigation}){
    function goToMemberSign(){
        navigation.navigate('MemberSignScreen');

    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Light Weight Fitness Center</Text>
            <Button text="Create Account" onPress={goToMemberSign}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
    },
});

export default Welcome;
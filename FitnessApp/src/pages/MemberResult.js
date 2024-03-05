import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function MemberResult({route}){
    const {user} = route.params;
    return (
        <SafeAreaView>
            <Text style={styles.message}>Created Successfully!</Text>
            <Text style={styles.label}>Member Name: {user.userName}</Text>
            <Text style={styles.label}>Member Surname: {user.userSurname}</Text>
            <Text style={styles.label}>Member Age: {user.userAge}</Text>
            <Text style={styles.label}>Member E-mail: {user.userMail}</Text>
            <Text style={styles.label}>Member Home Town: {user.userHometown}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
    },
    message: {
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
    },
});

export default MemberResult;
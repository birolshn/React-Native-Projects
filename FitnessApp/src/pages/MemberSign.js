import React, {useState} from 'react';
import { SafeAreaView, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation})  {
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHometown, setUserHometown] = useState(null);

    function handleSubmit(){
        if(!userName || !userSurname || !userAge || !userMail || !userHometown){
            Alert.alert('Light Weight Fitness Center', 'Do not skip empty to the informations!');
            return;
        }
        const user ={
            userName,
            userSurname,
            userAge,
            userMail,
            userHometown,
        };
        navigation.navigate('MemberResultScreen', {user});
    }
    
    return (
        <SafeAreaView>
            <Input label="User Name" placeholder="Enter your name..." onChangeText={setUserName}/>
            <Input label="Surname" placeholder="Enter your surname..." onChangeText={setUserSurname}/>
            <Input label="User Age" placeholder="Enter your age..." onChangeText={setUserAge}/>
            <Input label="E-Mail" placeholder="Enter your e-mail address..." onChangeText={setUserMail}/>
            <Input label="Home Town" placeholder="Enter your home town..." onChangeText={setUserHometown}/>
            <Button text="Create Account" onPress={handleSubmit} />
        </SafeAreaView>
    );
}

export default MemberSign;
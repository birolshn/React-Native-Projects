import React, {useState} from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import styles from './TodoList.styles';

const TodoList = props => {
    const [helloFlag, setHelloFlag] = useState(true);
    function updateFlag() {
        setHelloFlag(!helloFlag);
    }
    return (
        <SafeAreaView>
            <View style={helloFlag ? styles.container : styles.container2}>
                <TouchableOpacity onPress={updateFlag}>
                    <Text style={helloFlag ? styles.text1 : styles.text2}>{props.setTodo.item.title}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );

};

export default TodoList;

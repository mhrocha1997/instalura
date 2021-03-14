import React, { Fragment, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";

export default function Comments({comments}){
    const [ commentList, setCommentList] = useState(comments);
    
    

    const addComment = () => {
        inputField.clear();
        const newComment = {
            date: Date.now(),
            text: inputContent,
            userName: "Marcelo"
        }
        setCommentList([...commentList,newComment]);
    }

    let inputField;
    let inputContent = "";
    
    return(
        <Fragment>
            <FlatList
            data={commentList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>
                <View style={styles.commentView}>
                    <Text>{item.userName}</Text>
                    <Text> {item.text} </Text>
                </View> 
                
            }
            />
            <View style={styles.commentView}>
                <TextInput
                    ref={textInput => inputField = textInput}
                    onChangeText={text => inputContent = text }
                    placeholder={"Deixe seu comentário..."}
                    style={{ flex:1 }}
                />
                <TouchableOpacity onPress={addComment}>
                    <Image 
                        source={require('../../res/img/send.png')} 
                        style={styles.sendImg}
                    />
                </TouchableOpacity>
            </View>
            
        </Fragment>
        
    );
}

const styles = StyleSheet.create({
    commentView:{
        flexDirection: "row",
        alignItems: "center"
    },
    sendImg:{
        width: 30,
        height: 30,
        marginRight: 5
    },
});
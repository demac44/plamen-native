import React, { useContext } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Avatar from '../../../General components/Avatar';
import { UserContext } from '../../../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const win = Dimensions.get('window')

const Comment = ({cmt}) => {
    const user = useContext(UserContext)

    return (
        <View style={styles.comment}>
            <Avatar image={cmt.profile_picture} size={30}/>

            <Text style={styles.textBox}><Text style={{fontWeight:"bold", color:"white"}}>{cmt.username+' '}</Text>{cmt.comment_text}</Text>

            {cmt.userID===user.userID && <FontAwesomeIcon icon='trash-alt' size={14} color='white' style={{marginLeft:5, marginTop:3}}/>}
        </View>
    );
};

export default Comment;

const styles = StyleSheet.create({
    comment:{
        width:"100%",
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        padding:5
    },
    textBox:{
        backgroundColor:"#2f2f2f",
        width:win.width - 15 - 13 - 40, // width of avatar and icon and padding
        paddingVertical:7,
        paddingHorizontal:5,
        borderRadius:5,
        marginLeft:5
    }
})
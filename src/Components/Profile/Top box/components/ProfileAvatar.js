import React from 'react';
import { Image, View } from 'react-native';
import defaultPfp from '../../../../Assets/images/pfp.jpg'

const ProfileAvatar = ({url}) => {
    return (
        <View style={styles.box}>
            <Image source={url ? {uri: url} : defaultPfp} style={styles.image}/>
        </View>
    );
};

export default ProfileAvatar;

const styles = {
    box:{
        width:170,
        height:170,
        borderRadius:10,
    },
    image:{
        width:"100%",
        height:"100%",
        borderRadius:10,
        borderWidth:5,
        borderColor:"#5e1b82"
    }
}
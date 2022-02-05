import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import UsersListUser from '../../Components/General components/Lists/UsersListUser';
import backIcon from '../../Assets/images/icons/back-icon.png'


const UsersList = ({navigation, route}) => {
    const {data, title} = route.params

    return (
        <View style={{backgroundColor:"#1b1b1b", flex:1}}>
            <View style={{flexDirection:'row', padding:10, justifyContent:'center', borderBottomColor:"#2f2f2f", borderBottomWidth:1, backgroundColor:"#1b1b1b"}}>

                <TouchableOpacity style={{position:'absolute', left:10, top:17}} onPress={()=>navigation.goBack()}>
                    <Image source={backIcon}/>
                </TouchableOpacity>
                <Text style={{fontSize:25, color:"white"}}>{title}</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({item}) => <UsersListUser data={item} key={item.userID}/>}
            />
        </View>
    );
};

export default UsersList;
import React from "react";
import { 
Text,
SafeAreaView,
ScrollView,
StatusBar,
View,
Image, 
TextInput
} from "react-native";

import {
ImageContainer,
NameContainer,
UserPhoto,
UserSmallPhoto,
UserName,
PostImage,
B
} from "./styles";

import like from '../../assets/images/instagram-icons/like.png'
import comment from '../../assets/images/instagram-icons/comment.png'
import send from '../../assets/images/instagram-icons/send.png'
import save from '../../assets/images/instagram-icons/save.png'

import {posts} from '../../assets/utils/posts'

export default function Home(){
    return(
        <>
            <StatusBar barStyle="light-content" backgroundColor="#0f0f0f"/>
            <SafeAreaView >
                <Text>Home</Text>
                <ScrollView>
                    {posts.map(item => {
                        return(
                            <View key={item.id}>
                                <ImageContainer>
                                    <UserPhoto source={item.userphoto}/>
                                    <NameContainer>
                                        <UserName>{item.user}</UserName>
                                        <Text>{item.localization}</Text>
                                    </NameContainer>
                                </ImageContainer>
                                <PostImage source={item.post_image}/>

                                <View style={{justifyContent: 'space-between'}}>    
                                    <View style={{flexDirection: "row"}}>
                                        <Image source={like}/>
                                        <Image source={comment}/>
                                        <Image source={send}/>
                                    </View>

                                    <View style={{flexDirection: 'row-reverse'}}>
                                        <Image source={save}/>
                                    </View>
                                </View>

                                <View style={{marginLeft: 5}}>
                                    <Text>Curtido por <B>{item.user_comment}</B> e outras <B>{item.likes} pessoas</B></Text>
                                    <Text><UserName>{item.user}</UserName> {item.post_desc}</Text>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5}}>
                                        <UserSmallPhoto source={item.userphoto}/>
                                        <TextInput placeholder="Adicione um comentário"/>
                                    </View>
                                    <Text style={{marginTop: 10, marginLeft: 5}}>Há 26 minutos</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
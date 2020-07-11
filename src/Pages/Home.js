import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import stylesHome from '../styles/stylesHome';

export default function Home({navigation}){

const [search, setsearch] = useState('https://api.github.com/search/users?q=');
const [usuario, setuser] = useState('');
const [data, setdata] = useState([]);
const [isLoading, setLoading] = useState(true);

return (
    <View style={stylesHome.container}>
      <View style={stylesHome.upstyle}>
        <Animatable.View animation="slideInRight" duration={500} style={stylesHome.secondStyle}>
          <Icon.Button
            name="search" size={20} color="#4F4F4F" backgroundColor='transparent'
            onPressIn={()=>setsearch("https://api.github.com/search/users?q="+usuario)}
            onPress={() => {
              fetch(search)
                .then((response) => response.json())
                .then((json) => setdata(json.items))
                .finally(() => setLoading(false));             
            }}

         />      
          <TextInput
            placeholder="Pesquisar usuário"
            style={stylesHome.search}
            onChangeText={(val)=> setuser(val)}
          />
          <View>
          <Icon.Button 
            name="long-arrow-left"
            size={20} color="#4F4F4F" backgroundColor='transparent'
            onPress={()=> setsearch('https://api.github.com/search/users?q=')}
            onPressOut={() => setdata([])}
          />
          </View>
        </Animatable.View>
      </View>
  <View style={{flex: 1}}>
    {isLoading ? <ActivityIndicator/> : (
    
    <FlatList
    data={data}
    KeyExtractor={({ id }, index) => id}
    renderItem={({item}) => (
      <TouchableOpacity onPress={() => navigation.navigate('Profile', item)}>
        <View style={{flexDirection: 'row', borderColor:'#DCDCDC', borderBottomWidth: 1}}>
          <Image 
            style={{ borderRadius: 25, marginHorizontal: 10, marginTop:10, width: 50, height: 50}}
            source={{ uri: item.avatar_url}}  
          />
          <View>
            <Text style={stylesHome.item}>{item.login}</Text>
            <Text style={stylesHome.subtitle}>{item.type}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )}

    />
    )}
    </View>
  </View>
  )
}


import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import stylesProfile from '../styles/stylesProfile';

export default function Profile({route, navigation}) {
  const {login, avatar_url, url, repos_url, type} = route.params;
  const [description, setdesc] = useState('');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [reposNum, setReposNum] = useState(0);

fetch(url)
  .then((response) => response.json())
  .then((json) => setdesc(json.bio));

fetch(url)
  .then((response) => response.json())
  .then((json) => setFollowers(json.followers));

fetch(url)
  .then((response) => response.json())
  .then((json) => setFollowing(json.following));

fetch(url)
  .then((response) => response.json())
  .then((json) => setReposNum(json.public_repos));

  return (
    <View style={stylesProfile.container}>
      <View style={stylesProfile.header}>
        <Image
            style={{ justifyContent: 'center', width: 120, height: 120, borderRadius: 60, borderColor: 'black', borderWidth: 3}}
            source={{uri: avatar_url}}  
          /> 
      </View>
      <View style={stylesProfile.mid}>
        <Text style={stylesProfile.login}>{login}</Text>
        <View>
          <Text style={stylesProfile.description}>{description}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Seguidores</Text>
            <Text>{followers}</Text>
          </View>
          <View style={{flexDirection: 'column', aligntItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Repos</Text>
            <Text>{reposNum}</Text>
          </View>
          <View style={{flexDirection: 'column', aligntItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Seguindo</Text>
            <Text>{following}</Text>
          </View>                  
        </View>
      </View>
    </View>
  );
}


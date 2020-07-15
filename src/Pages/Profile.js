import React, {useState} from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import stylesProfile from '../styles/stylesProfile';

export default function Profile({route, navigation}) {
  const {login, avatar_url, url, repos_url, type} = route.params;
  const [description, setdesc] = useState('');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [reposNum, setReposNum] = useState(0);
  const [repos, setRepos] = useState([]);


 /*CARREGAMENTO DOS DADOS DO USUÁRIO*/ 
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

fetch(repos_url)
  .then((response) => response.json())
  .then((json) => setRepos(json));

 /*CARREGAMENTO DOS DADOS DO USUÁRIO*/ 


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
          <View style={{flexDirection: 'column', marginRight: 20}}>
            <Text style={stylesProfile.additionalInfo}>Seguidores</Text>
            <Text style={stylesProfile.numbers}>{followers}</Text>
          </View>
          <View style={{flexDirection: 'column', marginRight: 20}}>
            <Text style={stylesProfile.additionalInfo}>Repositórios</Text>
            <Text style={stylesProfile.numbers}>{reposNum}</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={stylesProfile.additionalInfo}>Seguindo</Text>
            <Text style={stylesProfile.numbers}>{following}</Text>
          </View>                  
        </View> 
      </View>
      <View style={{flex: 1}}>
      <FlatList
          data={repos}
          KeyExtractor={({id}, index) => id}
          renderItem={() => (
            <View style={{flexDirection: 'row'}}>
              <Text>Repositório: {repos.name} </Text>
            </View>
          )}

      />
      </View>
    </View>
  );
}


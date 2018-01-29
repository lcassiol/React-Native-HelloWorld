/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Post from './components/Post'


export default class Posts extends Component<{}> {
	 
	static navigationOptions = {
		title : 'Posts'
		
	};
	
	
  render() {
	  
	const { navigate } = this.props.navigation;
	  
    return (
      <ScrollView style={styles.container}>
		<TouchableOpacity 
		onPress ={() => { navigate('Profile') }}
		style={styles.profileButton}>
			<Text style={styles.profileButtonText}>Meu Perfil</Text>
		</TouchableOpacity>
		
		
        <Post />
		<Post />
		<Post />
		<Post />
		<Post />
		<Post />
		<Post />
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
	paddingTop: 5,
	paddingHorizontal: 20
  },
  profileButton: {
	  flex: 1,
	  backgroundColor: '#069',
	  paddingVertical: 10,
	  borderRadius: 5,
	  marginTop: 10
  },
  
  profileButtonText :{
	  textAlign : 'center',
	  color: '#FFF',
	  fontWeight: 'bold',
	  
  }
  
});

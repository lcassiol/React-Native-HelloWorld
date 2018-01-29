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
  View,
  Image
} from 'react-native';


export default class Profile extends Component<{}> {

	static navigationOptions = {
		title : 'Profile',
		headerTitleStyle: {
			fontWeight: '300',
			justifyContent: 'space-between',
			alignSelf: 'center'
      },
	};


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileImage}>
            <Image
              style={{width: 200, height: 200, borderRadius: 75}}
              source={require('./../images/cassioSorri.png')}
            />
        </View>
        <View style={styles.description}>
            <Text style={styles.descriptionText}>
    			       Hello my name is Cássio Carvalho, and thiss is my first project React Native!!
                 This is my 'Hello World'
            </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems : 'center',
    backgroundColor: '#F5FCFF',
	  paddingTop: 5
  },

  profileImage: {
    marginTop: 20
  },

  description: {
    padding : 30,
    marginLeft: 12
  },

  descriptionText : {
    fontSize: 25
  }

});

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
  View
} from 'react-native';


export default class Profile extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.postTitle}>
           Post Title
        </Text>
		<Text style={styles.postDescription}>
           Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Cevadis im ampola pa arma uma pindureta. A ordem dos tratores não altera o pão duris. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	borderWidth: 1,
	padding: 10,
	marginTop: 10
  },
  
  postTitle:{
	  fontSize: 18,
	  fontWeight: 'bold'
  },
  
  postDescription:{
	  marginTop: 10
  }
  
});

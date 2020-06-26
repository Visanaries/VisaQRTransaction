import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class Template extends Component {
    
        async componentDidMount(){

          try{

            await fetch('https://webhook.site/0f94fe01-c4ed-4ec0-a40b-5d5dc104bb95',{
              method: 'post',
              mode: 'no-cors',
              headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username:'john',
                password: 'doe'
              })
            });
            }
            catch(e){
              console.log(e);
            }
          }
        
      
    
      render() {
    
        if(this.state.isLoading){
          return(
            
              <View>
                <ActivityIndicator/>
              </View>
            
          )
        } else {

            let movies = this.state.dataSource.map((val, key) => {
                return  <View key={key} style={styles.item}>
                    <Text> {val.title}</Text>
                
                </View>
            });
            
      
      return(
        
            <View>
                {movies}
            </View>
            
      );
     }
  }
}
      

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  item: {  
      flex:1,
      alignSelf: 'stretch',
}
});









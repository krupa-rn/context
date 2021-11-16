//import liraries
import React, { useState , Component} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import { createStore } from 'redux';
import {connect} from 'react-redux';


// create a component
class MyComponent extends Component{
   
    //state= {
    // counter: 10
   //}   //replaced by mapStateToProps
  
    // decrease() {
    //     this.setState({ counter: this.state.counter -1 } );
    // }
    //  increase() {
    //     this.setState({ counter: this.state.counter +1 } );
    // }  REPLACED BY mapDispatchToProps
     
    render(){
        //instead of this.state we will use this.props for accessing data/functions
        // related to redux, eg: this.state.counter => this.props.counter 

    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.wrapperView}>
               <TouchableOpacity onPress={()=> this.props.increase()}>  
                   <Text style={{fontSize:20}}>Increase</Text>
               </TouchableOpacity>
                 
               <Text style={styles.reduxCounter}> {this.props.counter} </Text>

               <TouchableOpacity onPress={()=> this.props.decrease()}>
                   <Text style={{fontSize:20}}> Decrease </Text>
               </TouchableOpacity>
           </View>
        </SafeAreaView>
    );
    }
}

//in app, to map state with 
function mapStateToProps( state ){
    return{
       counter: state.counter 
       //kinda replacing local state with this
    }
}
function mapDispatchToProps( dispatch ){

    return{
        increase: ()=> dispatch({ type:'INCREASE_COUNTER' }),
        decrease: ()=> dispatch({type: 'DECREASE_COUNTER'})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    reduxCounter: {
        fontStyle:'italic', fontSize:20, borderWidth:1, padding:5,
        fontWeight:'bold', color:'violet'
    },
    wrapperView: {
        flexDirection:'row', width:300, justifyContent:'space-around', 
        alignItems:'center'
    }
});

export default connect(mapStateToProps)(mapDispatchToProps)(MyComponent);

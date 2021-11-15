import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  Button,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import Swiper from 'react-native-swiper';

// create a component
const MyComponent = () => {
  const [nodes, setNodes] = useState([]);
  const [detailViewVisible, setDetailViewVisibility] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    checkPermission().then(() => {
      readPhotos();
    });
  }, []);

  const checkPermission = async () => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (hasPermission) {
      return true;
    }
    status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'App Permission',
        message: 'Give Access to image Gallery',
        buttonPositive: 'Allow',
      },
    );
    return status === 'granted';
  };

  const readPhotos = async () => {
    result = await CameraRoll.getPhotos({
      first: 15,
    });
    console.log('result ' + result);
    setNodes(result.edges.map(edge => edge.node));
  };
  return (
    <ScrollView style={{flex: 1}}>
      <Text style={{fontSize: 15, alignSelf: 'center'}}>Here's it </Text>
      {detailViewVisible ? (
        <Swiper loop={false} index={selectedIndex}>
          {nodes.map((node, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#458',
              }}>
              <Image
                style={{
                  width: '100%',
                  flex: 1,
                }}
                resizeMode="contain"
                source={{
                  uri: node.image.uri,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 60,
                }}>
                <Button
                  title="Close"
                  onPress={() => {
                    setDetailViewVisibility(false);
                  }}
                />
              </View>
            </View>
          ))}
        </Swiper>
      ) : (
        <View style={styles.container}>
          {nodes.map((node, index) => (
            <TouchableOpacity
              key={index}
              style={styles.touchable}
              activeOpacity={0.5}
              onPress={() => {
                setDetailViewVisibility(true);
                setSelectedIndex(index);
              }}>
              <Image
                source={{uri: node.image.uri}}
                style={styles.imageView}
                //resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  touchable: {
    height: 100,
    minWidth: 100,
    flex: 1,
    margin: 5,
  },
  imageView: {
    height: 100,
    minWidth: 100,
    flex: 1,
  },
});

//make this component available to the app
export default MyComponent;

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  LogoTitle,
  Button,
  Modal,
  TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class homeScreen extends React.Component {
  state = {
    modalVisible: false,
    count: 0,

  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "SENSHI",
      headerRight: (
        <Button
          onPress={navigation.getParam('logout')}
          title="Cerrar SESION"
          color="black"
        />
      ),
    }
  }
  componentDidMount() {
    this.props.navigation.setParams({ logout: this._logout });
  }

  _logout = () => {
    alert("Cerrar sesion")
  };

  onPressModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    )
  }
  render() {
    return (
      <View style={styles.container} >
        <Swiper style={styles.wrapper} showsButtons={false} height={200} >
          <View style={styles.slide1}>
            <Image
              style={{ flex: 1 }}
              source={require('../common/image/cine-prime.jpg')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.slide2}>
            <Image
              style={{ flex: 1 }}
              source={require('../common/image/cine-capitol.jpg')}
              resizeMode="contain"

            />
          </View>
          <View style={styles.slide1}>
            <Image
              style={{ flex: 1 }}
              source={require('../common/image/cine-center.png')}
              resizeMode="contain"

            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{ flex: 1 }}
              source={require('../common/image/cine-norte.png')}
              resizeMode="contain"
            />
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
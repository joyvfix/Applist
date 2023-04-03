import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  DrawerLayoutAndroid,
} from 'react-native';
import {blue, green, greenyoung, red, white} from '../utils/color';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Rootstakparams} from '../utils/App';
import Drawer from './Drawer';

interface Item {
  item: string;
}

const Crud = () => {
  const Navigation = useNavigation<NativeStackNavigationProp<Rootstakparams>>();

  const [text, setText] = useState<string>('');
  const [data, setData] = useState<Item[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [editMode, setEditmode] = useState<boolean>(false);

  /*penulisan useeffect biasanya dibawah state */
  // yg ditampilkan atau dirender oleh mesin pertamakali
  // mengambil data dari async storage
  useEffect(() => {
    getData();
  }, []);

  const create = (text: string) => {
    setData(prevData => {
      const newData = [...prevData, {item: text}];
      console.log(newData);
      saveData(newData);
      return newData;
    });
  };

  // untuk menyimpan data
  const saveData = async (value: Array<{item: string}>) => {
    try {
      await AsyncStorage.setItem('database', JSON.stringify(value));
    } catch (e) {
      console.log('save data error', e);
    }
  };
  // untuk memunculkan data agar permanent
  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem('database');
      if (value !== null) {
        const parseValue = JSON.parse(value);
        console.log(parseValue);
        setData(parseValue);
      }
    } catch (error) {
      console.log('get Data error', error);
    }
  };

  const editData = () => {
    const newData = [...data];
    newData[index].item = text;

    setData(newData);
    setText('');
    setEditmode(false);

    saveData(newData);
  };

  const deleteData = () => {
    const newData = [...data];
    newData.splice(index, 1);
    setEditmode(false); /* */
    setData(newData);
    saveData(newData);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="blue" />
      <Text style={styles.textsan}>Daftar List</Text>
      <TouchableOpacity onPress={() => Navigation.navigate('drawer')}>
        <Image
          source={require('../assets/icon/menucolor.png')}
          style={styles.menulogo}
        />
      </TouchableOpacity>
      {data.map((value, index) => (
        <TouchableOpacity
          onPress={() => {
            setText(value.item);
            setIndex(index);
            setEditmode(true);
          }}
          key={index}
          style={{
            top: 25,
            marginTop: 9,
            marginLeft: 15,
            borderRadius: 5,
            paddingLeft: 10,
            paddingTop: 20,
            backgroundColor: greenyoung,
            marginBottom: 5,
            width: 400,
            elevation: 5,
          }}>
          <Text>
            {' '}
            {index}.{value.item}
          </Text>

          <TouchableOpacity
            onPress={() => {
              setIndex(index);
              deleteData();
            }}
            style={styles.deletebutton}>
            <Image
              style={styles.xbutton}
              source={require('../assets/icon/trash.png')}
            />
            {/* <Text style={styles.xbutton}>x</Text> */}
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
      <View style={styles.conterinput}>
        <TextInput
          placeholder="masukan data"
          style={styles.input}
          value={text}
          onChangeText={t => setText(t)}
        />

        {editMode ? (
          <TouchableOpacity
            onPress={() => (editMode ? editData() : create(text))}
            style={styles.button}>
            <Text style={styles.textedit}>edit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => (editMode ? editData() : create(text))}
            style={styles.button}>
            <Text style={styles.texttam}>Add</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Crud;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: red,
  },
  textsan: {
    fontSize: 20,
    left: 155,
    top: 25,
    // backgroundColor: red,
  },
  conterinput: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    bottom: 20,
    left: 10,
    // backgroundColor: red,
  },
  input: {
    borderWidth: 1,
    width: 320,
    borderRadius: 5,
    paddingLeft: 20,
    fontSize: 17,
  },
  button: {
    // backgroundColor: red,
    left: 10,
    top: 10,
  },
  texttam: {
    backgroundColor: green,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    width: 80,
    paddingLeft: 23,
    paddingTop: 9,
    marginRight: 5,
    fontSize: 17,
    color: white,
    borderRadius: 5,
    height: 45,
  },
  textedit: {
    backgroundColor: blue,
    alignItems: 'center',
    justifyContent: 'center',

    bottom: 10,
    width: 80,
    paddingLeft: 25,
    paddingTop: 10,
    marginRight: 5,
    fontSize: 17,
    color: white,
    borderRadius: 5,
    height: 45,
  },
  deletebutton: {
    left: 340,
    bottom: 23,
    backgroundColor: white,
    width: 35,
    paddingLeft: 10,
    height: 30,
    elevation: 5,
    borderRadius: 15,
  },
  xbutton: {
    width: 17,
    height: 17,
    top: 5,
  },
  menulogo: {
    width: 20,
    height: 20,
    top: 3,
    left: 390,
  },
  // {:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
  // firstlogo: {
  //   width: 50,
  //   height: 50,
  // },
  // text1: {
  //   marginTop: 15,
  //   fontSize: 23,
  //   fontWeight: 'bold',
  // },
  // text2: {
  //   marginTop: 15,
  //   fontSize: 15,
  //   fontWeight: '700',
  //   // borderBottomWidth: 1,
  //   paddingBottom: 30,
  // },
  // truelogo: {
  //   width: 20,
  //   height: 20,
  //   marginLeft: 85,
  //   marginTop: -25,
  // },

  // followerslogo: {
  //   width: 20,
  //   height: 20,
  //   marginLeft: 115,
  //   marginTop: -50,
  // },
  // profilelogo: {
  //   marginTop: -20,
  //   marginLeft: 20,
  //   width: 30,
  //   height: 30,
  // },
  // profile: {
  //   fontSize: 20,
  //   paddingLeft: 10,
  //   marginTop: -20,
  // },
  // messageslogo: {
  //   width: 30,
  //   height: 30,
  //   marginTop: 10,
  //   marginLeft: 20,
  // },
  // messages: {
  //   fontSize: 20,
  //   paddingLeft: 10,
  //   marginTop: 10,
  // },
  // activitylogo: {
  //   width: 30,
  //   height: 30,
  //   marginTop: 10,
  //   marginLeft: 20,
  // },
  // activity: {
  //   fontSize: 20,
  //   paddingLeft: 10,
  //   marginTop: 10,
  // },
  // listlogo: {
  //   width: 30,
  //   height: 30,
  //   marginTop: 10,
  //   marginLeft: 20,
  // },
  // list: {
  //   fontSize: 20,
  //   paddingLeft: 10,
  //   marginTop: 10,
  // },
  // repostlogo: {
  //   width: 30,
  //   height: 30,
  //   marginTop: 10,
  //   marginLeft: 20,
  // },
  // repost: {
  //   fontSize: 20,
  //   paddingLeft: 10,
  //   marginTop: 10,
  // },
  // statisticlogo: {
  //   width: 30,
  //   height: 30,
  //   marginTop: 10,
  //   marginLeft: 20,
  // },
  // statistic: {
  //   fontSize: 20,
  //   paddingLeft: 10,
  //   marginTop: 10,
  // },
  // signoutlogo: {
  //   width: 30,
  //   height: 30,
  //   marginTop: 10,
  //   marginLeft: 20,
  // },
  // signout: {
  //   fontSize: 20,
  //   paddingLeft: 10,
  //   marginTop: 10,
  // },
  // sharelogo: {
  //   width: 30,
  //   height: 30,
  //   marginTop: 25,
  //   marginLeft: 20,
  // },
  // share: {
  //   fontSize: 20,
  //   paddingLeft: 10,
  //   marginTop: 25,
  // },
  // helplogo: {
  //   width: 30,
  //   height: 30,
  //   marginTop: -20,
  //   marginLeft: 20,
  // },
  // help: {
  //   fontSize: 20,
  //   paddingLeft: 10,

  //   marginTop: -30,
  // },
});

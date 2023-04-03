import {
  Text,
  StyleSheet,
  View,
  DrawerLayoutAndroid,
  Touchable,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {green, grey} from '../utils/color';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Rootstakparams} from '../utils/App';

export default class drawer extends Component {
  private drawerRef = React.createRef<DrawerLayoutAndroid>();
  render() {
    const navigationView = (
      <View>
        <View
          style={{
            backgroundColor: green,
            alignItems: 'baseline',
            flexDirection: 'column',
            paddingTop: 20,
            paddingLeft: 20,

            paddingVertical: 30,
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
            }}
            style={styles.firstlogo}
          />

          <Text style={styles.text1}>GILDED</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/5582/5582932.png',
            }}
            style={styles.truelogo}
          />
          <Text style={styles.text2}>5.203 followers</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/747/747410.png',
            }}
            style={styles.followerslogo}
          />
        </View>
        {/* baris baru  baris baru baris baru */}
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 50,
              paddingRight: 90,
              marginRight: 70,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/2354/2354573.png',
              }}
              style={styles.profilelogo}
            />
            <Text style={styles.profile}>profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingRight: 90,
              marginRight: 70,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/542/542638.png',
              }}
              style={styles.messageslogo}
            />
            <Text style={styles.messages}>messages</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
              paddingRight: 90,
              marginRight: 70,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/9364/9364298.png',
              }}
              style={styles.activitylogo}
            />
            <Text style={styles.activity}>activity</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
              paddingRight: 90,
              marginRight: 70,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1187/1187525.png',
              }}
              style={styles.listlogo}
            />
            <Text style={styles.list}>list</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
              paddingRight: 90,
              marginRight: 70,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/5436/5436546.png',
              }}
              style={styles.repostlogo}
            />
            <Text style={styles.repost}>repost</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
              paddingRight: 90,
              marginRight: 70,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/921/921540.png',
              }}
              style={styles.statisticlogo}
            />
            <Text style={styles.statistic}>statistic</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
              paddingRight: 90,
              marginRight: 70,
              borderBottomWidth: 0.2,
              paddingBottom: 50,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828479.png',
              }}
              style={styles.signoutlogo}
            />
            <Text style={styles.signout}>sign out</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
              paddingRight: 90,
              marginRight: 70,

              paddingBottom: 30,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1358/1358023.png',
              }}
              style={styles.sharelogo}
            />
            <Text style={styles.share}>tell a friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 15,
              paddingRight: 90,
              marginRight: 70,

              paddingBottom: 30,
            }}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1828/1828940.png',
              }}
              style={styles.helplogo}
            />
            <Text style={styles.help}>help and fedback</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={this.drawerRef}
        drawerWidth={300}
        drawerPosition={'right'}
        renderNavigationView={() => navigationView}>
        <TouchableOpacity onPress={() => this.drawerRef.current?.openDrawer()}>
          <Image
            source={{
              uri: /*'https:cdn-icons-png.flaticon.com/128/1828/1828859.png'*/ 'https:cdn-icons-png.flaticon.com/128/9838/9838467.png',
            }}
            style={{width: 30, height: 30, margin: 10}}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{fontSize: 20, marginVertical: 10}}
            onPress={() => this.drawerRef.current?.openDrawer()}>
            {/* openDrawer */}
          </Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  firstlogo: {
    width: 50,
    height: 50,
  },
  text1: {
    marginTop: 15,
    fontSize: 23,
    fontWeight: 'bold',
  },
  text2: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: '700',
    // borderBottomWidth: 1,
    paddingBottom: 30,
  },
  truelogo: {
    width: 20,
    height: 20,
    marginLeft: 85,
    marginTop: -25,
  },

  followerslogo: {
    width: 20,
    height: 20,
    marginLeft: 115,
    marginTop: -50,
  },
  profilelogo: {
    marginTop: -20,
    marginLeft: 20,
    width: 30,
    height: 30,
  },
  profile: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: -20,
  },
  messageslogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  messages: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  activitylogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  activity: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  listlogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  list: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  repostlogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  repost: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  statisticlogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  statistic: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  signoutlogo: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  signout: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 10,
  },
  sharelogo: {
    width: 30,
    height: 30,
    marginTop: 25,
    marginLeft: 20,
  },
  share: {
    fontSize: 20,
    paddingLeft: 10,
    marginTop: 25,
  },
  helplogo: {
    width: 30,
    height: 30,
    marginTop: -20,
    marginLeft: 20,
  },
  help: {
    fontSize: 20,
    paddingLeft: 10,

    marginTop: -30,
  },
});

// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}

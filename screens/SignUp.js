/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScrollView} from 'react-native-gesture-handler';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#FEFEFE'}}>
      <View
        style={{
          marginTop: 92,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/Lunchbox.png')}
          style={{
            width: 225,
            height: 56,
            marginTop: 35,
          }}
        />
        <Text
          style={{
            marginTop: 70,
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 24,
            color: '#606060',
          }}>
          쉬는 날에 시간 낭비 걱정 없이
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginTop: 15,
              fontWeight: '700',
              fontSize: 23,
              lineHeight: 24,
              color: '#1C1C1C',
            }}>
            우리는
          </Text>
          <Text
            style={{
              marginTop: 15,
              fontWeight: '700',
              fontSize: 23,
              lineHeight: 24,
              color: '#EFC01A',
              marginLeft: 5,
            }}>
            점심시간에
          </Text>
          <Text
            style={{
              marginTop: 15,
              fontWeight: '700',
              fontSize: 23,
              lineHeight: 24,
              color: '#1C1C1C',
              marginLeft: 5,
            }}>
            만난다
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#FAFAFA',
            width: 319,
            height: 47,
            borderWidth: 1,
            borderColor: '#D0D0D0',
            borderRadius: 10,
            marginTop: 70,
          }}>
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: '500',
              marginLeft: 20,
              color: '#DADADA',
            }}
            placeholder="이메일"></TextInput>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View
              style={{
                backgroundColor: '#EFC01A',
                width: 319,
                height: 46,
                borderRadius: 100,
                marginTop: 25,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 15,
                  lineHeight: 24,
                  color: '#FFFFFF',
                }}>
                이메일로 계속하기
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 13,
            lineHeight: 24,
            color: '#5F5F5F',
            marginTop: 7,
          }}>
          or
        </Text>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 13,
            lineHeight: 24,
            color: '#5F5F5F',
            marginTop: 7,
          }}>
          다음 계정으로 계속하기
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Image
              source={require('../assets/Lunchbox.png')}
              style={{
                width: 60,
                height: 63,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Image
              source={require('../assets/Lunchbox.png')}
              style={{
                width: 60,
                marginLeft: 35,
                marginRight: 35,
                height: 63,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Image
              source={require('../assets/Lunchbox.png')}
              style={{
                width: 60,
                height: 63,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

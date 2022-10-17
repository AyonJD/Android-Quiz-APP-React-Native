import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginImageContainer}>
        <Image
          source={require('../../assets/login.png')}
          style={styles.loginImage}
        />
      </View>

      <View style={styles.loginForm}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0F87FF', marginBottom: 20, marginTop: 40 }}>Please Login to continue</Text>

        <View style={{ width: '100%' }}>

          <View style={styles.inputParent}>
            <Text style={{ fontSize: 12, marginBottom: 5, color: '#403f40' }}>Email Address</Text>
            <TextInput style={styles.input} placeholder="Email" />
          </View>

          <View style={[styles.inputParent, { marginTop: 15 }]}>
            <Text style={{ fontSize: 12, marginBottom: 5, color: '#403f40' }}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />
          </View>

          <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={.5} style={styles.loginParent}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loginImageContainer: {
    flex: 1,
  },
  loginImage: {
    width: '80%',
    height: undefined,
    aspectRatio: 1,
  },
  loginForm: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  inputParent: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#0F87FF',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  loginParent: {
    backgroundColor: '#0F87FF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 25,
    width: '50%',
  },
  login: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
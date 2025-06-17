import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getAuth } from '@react-native-firebase/auth';
import {
  GoogleAuthProvider,
  signInWithCredential,
} from '@react-native-firebase/auth';
const LoginScreen = ({ navigation }: any) => {
  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: 'iosClientId for iOS, nothing special here',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      profileImageSize: 120,
      webClientId:
        '600220884535-hvhhusoo0udj4fcartm0lnfdu3t1vd61.apps.googleusercontent.com',
    });
  }, []);

  const signInWithGoogle = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const signInResult = await GoogleSignin.signIn();

    let idToken = signInResult.data?.idToken;
    if (!idToken) {
      idToken = signInResult.idToken;
    }
    if (!idToken) {
      throw new Error('No ID token found');
    }

    const googleCredential = GoogleAuthProvider.credential(
      signInResult.data.idToken,
    );
    navigation.replace('Todo');
    return signInWithCredential(getAuth(), googleCredential);
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in with Google" onPress={signInWithGoogle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default LoginScreen;

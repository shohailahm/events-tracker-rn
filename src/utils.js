import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async val => {
  try {
    await AsyncStorage.setItem(`${global.name}`, JSON.stringify(val));
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(`${key}`);
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  }
};

import AsyncStorage from "@react-native-async-storage/async-storage";

export const insertString = async (key, value, callback = null) => {
  try {
    await AsyncStorage.setItem(key, value, callback);
  } catch (e) {
    throw new Error("Não foi possível salvar a string na chave ", key);
  }
};

export const insertObject = async (key, value, callback = null) => {
  try {
    const objeto = JSON.stringify(value);
    await AsyncStorage.setItem(key, objeto, callback);
  } catch (e) {
    throw new Error("Não foi possível salvar o objeto na chave ", key);
  }
};

export const read = async (key, callback = null) => {
    try {
        return await AsyncStorage.getItem(key, callback)
    } catch (e) {
        throw new Error("Não foi possível buscar a informação na chave ", key)
    }
}

export const allKeys = async (callback = null) => {
    try {
        await AsyncStorage.getAllKeys(callback)
    } catch (e) {
        throw new Error("Não foi possível buscar todas as chaves armazenadas.")
    }
}

export const remove = async (key, callback=null) => {
    try {
        await AsyncStorage.removeItem(key, callback)
    } catch (e) {
        throw new Error("Não foi possível excluir o valor da chave", key)
    }
}
export const removeAll = async (callback=null) => {
  try {
      await AsyncStorage.clear(callback)
  } catch (e) {
      throw new Error("Não foi possível limpar o banco de dados", key)
  }
}

import { types, onSnapshot, getSnapshot } from "mobx-state-tree";
import { AsyncStorage } from "react-native";

export const AppStore = types.model("AppStore", {
  identifier: types.optional(types.identifier, "AppStore")
});
//   .actions(self => ({
//     async save() {
//       try {
//         const transformedSnapshot = getSnapshot(self);
//         const json = JSON.stringify(transformedSnapshot);

//         await AsyncStorage.setItem('appStatePersistenceKey', json);
//       } catch (err) {
//         console.warn('unexpected error ' + err);
//       }
//     },
//   }));

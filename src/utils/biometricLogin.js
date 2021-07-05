import * as LocalAuthentication from "expo-local-authentication";
import { Alert } from "react-native";

const biometricLogin = async () => {
  if (
    (await LocalAuthentication.hasHardwareAsync()) &&
    (await LocalAuthentication.isEnrolledAsync())
  ) {
    const { success, error } = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticating...",
    });
    if (!success) {
      Alert.alert(`
        Failed to use biometrics to login...
        Error: ${error}
        `);
    }
  }
};

export default biometricLogin;

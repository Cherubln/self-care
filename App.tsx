import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import GetStartedScreen from "./app/screens/GetStartedScreen";

export default function App() {
  const orientation = useDeviceOrientation();

  return <GetStartedScreen />;
}

import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./screens/WelcomeScreen";
import GetStartedScreen from "./screens/GetStartedScreen";

export default function App() {
  const orientation = useDeviceOrientation();

  return <WelcomeScreen />;
}

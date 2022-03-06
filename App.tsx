import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';

export default function App() {
  return (
    <>
    <NavigationContainer>
      <StatusBar translucent style='dark'/>
      <AppRoutes />
    </NavigationContainer>
    </>
  );
}
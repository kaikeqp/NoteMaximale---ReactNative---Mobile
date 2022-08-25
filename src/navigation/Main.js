import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Login } from '../screens/public/Login';
import { Register } from '../screens/public/Register';
import { Settings } from '../screens/private/Settings';
import { Feed } from '../screens/private/Feed';

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

function InsideTabs() {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#E91C5D',
        headerStyle: {
          backgroundColor: '#E91C5D',
        },
        headerTintColor: '#fff',
        headerStatusBarHeight: 24
      }}>
      <MainTab.Screen
        name="Feed"
        component={Feed}
        options={{
          headerShown: true,
          title: 'Feed',
          headerTitle: 'NoteMaximale',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <MainTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

export const Main = () => (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Register" component={Register} />
        <MainStack.Screen name="InsideApp" component={InsideTabs} />
      </MainStack.Navigator>
    </SafeAreaView>
  </SafeAreaProvider>
);

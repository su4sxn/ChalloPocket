const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import IPhone13ProMax1 from "./screens/IPhone13ProMax1";
import IPhone13ProMax6 from "./screens/IPhone13ProMax6";
import IPhone13ProMax5 from "./screens/IPhone13ProMax5";
import IPhone13ProMax4 from "./screens/IPhone13ProMax4";
import IPhone13ProMax3 from "./screens/IPhone13ProMax3";
import IPhone13ProMax2 from "./screens/IPhone13ProMax2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone13ProMax1"
              component={IPhone13ProMax1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax6"
              component={IPhone13ProMax6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax5"
              component={IPhone13ProMax5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax4"
              component={IPhone13ProMax4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax3"
              component={IPhone13ProMax3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone13ProMax2"
              component={IPhone13ProMax2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

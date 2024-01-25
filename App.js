import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './src/Pages/routes';
import Planos from './src/Pages/Planos';
import Treinos from './src/Pages/Treinos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Routes'>
        <Stack.Screen name="Routes"
          component={Routes}
          options={{
            headerShown: false,
          }}

        />
        <Stack.Screen name="Treinos" component={Treinos} />
        <Stack.Screen name="Planos" component={Planos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



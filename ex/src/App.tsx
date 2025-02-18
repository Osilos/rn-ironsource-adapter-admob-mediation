import { Text, View, StyleSheet, Pressable } from 'react-native';
import { IronSourceAdapter } from 'react-native-rn-ironsource-adapter-admob-mediation';

export default function App() {
  const onPress = () => {
    IronSourceAdapter.setConsent(true);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text>Result</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

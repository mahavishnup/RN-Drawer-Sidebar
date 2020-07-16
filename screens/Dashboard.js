import React from 'react';
import { StatusBar } from 'react-native';
import { Block, Text } from 'expo-ui-kit';

export default ({ style }) => {
  return (
    <Block
      color="#0be881"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <StatusBar />
      <Text h2 white center>
        Hello Friends!
      </Text>
    </Block>
  );
};

import React from 'react';
import { Block, Text } from 'expo-ui-kit';

export default ({ style }) => {
  return (
    <Block
      color="#3c40c6"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <Text h3 center>
        Contact Us
      </Text>
      <Text bold>selvamvishnu25@gmail.com</Text>
    </Block>
  );
};

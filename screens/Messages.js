import React from 'react';
import { Block, Text } from 'expo-ui-kit';

export default ({ style }) => {
  return (
    <Block
      color="#4bcffa"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <Text bold h2 center>
        Follow to my instagram
      </Text>

      <Text bold h2 center>
      https://www.instagram.com/maha.vishnu_
      </Text>
    </Block>
  );
};

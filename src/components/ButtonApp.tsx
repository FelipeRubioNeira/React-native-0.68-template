import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, ButtonProps} from '@rneui/themed';

export const ButtonApp = ({title, onPress, icon, ...rest}: ButtonProps) => {
  let renderIcon = icon;
  if (icon && React.isValidElement(icon)) {
    renderIcon = <View style={styles.iconMargin}>{icon}</View>;
  }
  return (
    <Button
      title={title || ''}
      buttonStyle={styles.firstButton}
      containerStyle={styles.firstButtonContainer}
      onPress={onPress}
      icon={renderIcon}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  firstButton: {
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderRadius: 8,
    fontWeight: 'bold',
  },
  firstButtonContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  iconMargin: {
    marginRight: 8,
  },
});

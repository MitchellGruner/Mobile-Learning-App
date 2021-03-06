import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'

const TextInput = ({ errorText, description, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor={theme.colors.primary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {description && !errorText ? (
      <Text style={styles.description}>{description}</Text>
    ) : null}
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 2,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.text,
  },
  description: {
    fontSize: 10,
    color: theme.colors.text,
    paddingTop: 5,
  },
  error: {
    fontSize: 10,
    color: theme.colors.error,
    paddingTop: 5,
  },
})

export default TextInput

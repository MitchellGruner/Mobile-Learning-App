import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

const Button2 = ({ mode, style, ...props }) => (
  <PaperButton
    style={[
      styles.button2,
      mode === 'outlined' && {
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.primary,
      },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  />
)

const styles = StyleSheet.create({
  button2: {
    width: '100%',
    marginVertical: 5,
    paddingVertical: 2,
    backgroundColor: theme.colors.button2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: theme.colors.primary,
    
  },
})

export default Button2

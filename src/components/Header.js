import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

const Header = (props) => <Text style={styles.header} {...props} />

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingBottom: 30,
    textAlign: 'center'
  },
})

export default Header

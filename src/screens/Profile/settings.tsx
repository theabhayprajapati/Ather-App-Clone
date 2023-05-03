import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, PADDING } from '../../utils/constants'
import { QuickLinks } from '../Service'

type Props = {
  navigation: any;
}
const SETTINGS_MENU = [
  {
    title: 'Change Password',

  },
  {
    title: 'Terms and Privacy Policy',

  },
  {
    title: 'Vehicle OTA update',

  },
  {
    title: 'Notifications',

  },
]

const Settings = (props: Props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon}
          onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>
          Settings
        </Text>
      </View>
      <View style={styles.menuContainer}>
        {
          SETTINGS_MENU.map((item, index) =>
            <QuickLinks key={index} name={item.title} />
          )

        }
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    height: 24,
    aspectRatio: 1,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.title,
    textAlign: 'left',
  },
  menuContainer: {
    marginTop: 20,
  }
})


/* Change Password
Terma and Privacy Policy
Vehicle OTA update
Notifications */


import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONT, MARGIN, PADDING } from '../../utils/constants'
import { hexWithOpacity } from '../../utils/helpers'

type Props = {}

type ServiceProps = {
  name: string;
  description: string;
  icon: React.ReactNode;
  iconName: string;
}
const SERVICES: ServiceProps[] = [
  {
    name: 'Get Support',
    description: 'Have any queries or quires?',
    icon: <AntDesign name="customerservice" size={24} color={hexWithOpacity(COLORS.blue, 100)} />,
    iconName: 'Contatct',
  },

  {
    name: 'Roadside Assistance',
    description: 'For on road assistance',
    icon: <MaterialIcons name="call" size={24} color={hexWithOpacity(COLORS.blue, 100)} />,
    iconName: '24x7',
  },
  {
    name: 'Book Servicing',
    description: 'Book a slot for your  Vehicle service',
    icon: <Ionicons name="calendar" size={24} color={hexWithOpacity(COLORS.blue, 100)} />,
    iconName: 'Book now',

  }
]


const ServiceItem = ({ name, description, icon, iconName }: ServiceProps) => {
  return (
    <View style={ServiceStyles.container}>
      <View style={ServiceStyles.left}>
        <Text style={ServiceStyles.name}>
          {name}
        </Text>
        <Text style={ServiceStyles.description}>
          {description}
        </Text>
      </View>
      <View style={ServiceStyles.right}>
        <TouchableOpacity style={ServiceStyles.icon}>
          {icon}
        </TouchableOpacity>
        <Text style={ServiceStyles.iconName}>
          {iconName}
        </Text>
      </View>
    </View>
  )
}

const ServiceStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING.primary,
    flexDirection: 'row',
    height: 112,
    justifyContent: 'space-between',
    backgroundColor: COLORS.lightgray,
    marginTop: 24,
    borderRadius: 5,
  },
  left: {
    width: 175,
    justifyContent: 'space-between',
  },
  right: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  name: {
    ...FONT.regular,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#2C333D',
  },
  description: {
    ...FONT.regular,
    fontSize: 14,
    fontStyle: 'normal',
    color: '#2C333D',
    fontWeight: '400',
  },
  icon: {
    // round 44
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: hexWithOpacity(COLORS.blue, 20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconName: {
    ...FONT.regular,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    color: hexWithOpacity(COLORS.blue, 80),
  }
});


const LINKS = [
  'Quick help', 'Vehicle Maintaince'
]


type QuickLinkProps = {

  name: string;
}

export const QuickLinks = ({ name }: QuickLinkProps) => {
  return (
    <TouchableOpacity style={QuickLinkstyle.container}>
      <Text style={QuickLinkstyle.name}>
        {name}
      </Text>
      {/* right arrow */}

      <Entypo name="chevron-right" size={24} color="black" />

    </TouchableOpacity>)
}


const QuickLinkstyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingVertical: PADDING.primary,
    borderBottomWidth: 1,
    borderColor: '#262D3766'
  },
  name: {
    ...FONT.regular,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#262D37',

  }
})


const Service = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Need help?</Text>
      <View>
        {SERVICES.map((service) => (
          <ServiceItem {...service} />
        ))}

      </View>
      <View style={{ marginTop: MARGIN.secondary }}>
        {LINKS.map((link) => (
          <QuickLinks name={link} />
        ))}

      </View>
    </View>
  )
}

export default Service

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING.primary,
  },
  title: {
    ...FONT.regular,
    fontSize: 20,
    lineHeight: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#2C333D',
  }
})
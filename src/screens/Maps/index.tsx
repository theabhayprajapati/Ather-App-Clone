import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FloatingActionButton, FloatingActionButtonContainer } from '../../components/FloatingActionButton'
import GoogleMapsSearch from '../../components/GoogleMapsSearch'
import IconList from '../../components/IconList'
import { PADDING } from '../../utils/constants'

type Props = {}

const Maps = (props: Props) => {

  const handleFABPress = () => {
    console.log('FAB pressed')
  }
  return (
    <View style={styles.container}>
      <View>
        <GoogleMapsSearch />
        <IconList />
      </View>
      <View>
        {/* list */}
      </View>

      <FloatingActionButtonContainer>
        {/* location, direction, pin drop */}
        <FloatingActionButton onPress={handleFABPress} icon="add-location-alt" backgroundColor="white" iconColor='red' />
        <FloatingActionButton onPress={handleFABPress} icon="my-location" backgroundColor="white" iconColor='gray' />
        <FloatingActionButton onPress={handleFABPress} icon="directions" backgroundColor="white" iconColor='gray' />
        {/* help */}
        <FloatingActionButton onPress={handleFABPress} icon="help" backgroundColor="white" iconColor='gray' />
      </FloatingActionButtonContainer>
    </View>
  )
}

export default Maps

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING.primary,
    position: 'relative',
  }
})
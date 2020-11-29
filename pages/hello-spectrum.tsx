import { Flex, View, Text, Button, Switch } from '@adobe/react-spectrum'
import { useProvider } from '@react-spectrum/provider'

function Hello() {
  const designSystem = useProvider()
  const isDarkThema = designSystem.colorScheme == 'dark'

  return (
    <Flex margin="size-100" gap="size-100" direction="column">
      <View>
        <Text>This page is based on React Spectrum.</Text>
      </View>
      <View>
        <Button variant="cta" onPress={() => alert('Hey there!')}>
          Hello React Spectrum!
        </Button>
      </View>
      <View>
        <Switch isSelected={isDarkThema}>
          Darkthema {isDarkThema ? 'on' : 'off'}{' '}
        </Switch>
      </View>
    </Flex>
  )
}

export default Hello

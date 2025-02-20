import { SplashScreen, Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer'


SplashScreen.preventAutoHideAsync()


const App = () => {
  const handleTrackPlayerLoaded = useCallback(() => {
      SplashScreen.hideAsync()
  },[])  
  
  useSetupTrackPlayer({
      onLoad: handleTrackPlayerLoaded
  })
  return (
		<SafeAreaProvider>
	
				<RootNavigation />

				<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
  return (
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false}} />
      </Stack>
  )
}
export default App
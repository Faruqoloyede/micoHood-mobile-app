import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";


export default function RootLayout() {
  const [fontLoaded] = useFonts({
     GeistRegular: require('../assets/fonts/Geist-Regular.ttf'),
    GeistMedium: require('../assets/fonts/Geist-Medium.ttf'),
    GeistBold: require('../assets/fonts/Geist-Bold.ttf'),
    GeistBlack: require('../assets/fonts/Geist-Black.ttf'),
    GeistSemiBold: require('../assets/fonts/Geist-SemiBold.ttf'),
  })

  useEffect(()=>{
    if(fontLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if(!fontLoaded) return null
  return <Stack screenOptions={{headerShown: false}} />;
}

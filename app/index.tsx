import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  Dimensions,
  SafeAreaView,
  type FlatList as FlatListType,
  type ViewToken,
} from "react-native";
import { useRef, useState } from "react";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Connect with Your Neighborhood",
    subtitle:
      "Join real conversations, discover what's happening around you, and stay in the loop with your local community.",
    image: require("../assets/images/onboarding1.png"),
  },
  {
    id: "2",
    title: "Promote, Discover and Report",
    subtitle:
      "Explore local businesses, post listings, and get real-time safety alerts from people nearby.",
    image: require("../assets/images/onboarding2.png"),
  },
  {
    id: "3",
    title: "Live Better, Right Where You Are",
    subtitle:
      "From housing to happenings, find everything you need to live better in your neighborhood.",
    image: require("../assets/images/onboarding3.png"),
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatListType>(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.push("/sign-in");
    }
  };

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setCurrentIndex(viewableItems[0].index!);
      }
    }
  );

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <SafeAreaView className="flex-1 bg-black">
      <FlatList
        data={slides}
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            className="w-screen h-full"
          >
            <View className="flex-1 justify-center items-center pt-32 bg-black/50 px-5 w-full min-h-[85vh]">
              <Text className="text-white text-[24px] leading-[32px] font-geist-bold font-bold text-center px-4">
                {item.title}
              </Text>
              <Text className="text-[16px] font-geist-regular text-white mt-5 leading-relaxed text-center">
                {item.subtitle}
              </Text>

              {/* Pagination Dots */}
              <View className="flex-row mt-16 items-center justify-center">
                {slides.map((_, index) => (
                  <View
                    key={index}
                    className={`w-3 h-3 mx-1 rounded-full ${
                      currentIndex === index ? "bg-green" : "bg-white/40"
                    }`}
                  />
                ))}
              </View>

              {/* Button Row */}
              <View className="flex-row items-center justify-between mt-20 w-full">
                {currentIndex !== slides.length - 1 && (
                  <CustomButton
                    title="Skip"
                    handlePress={() => router.push("/sign-in")}
                    containerStyles="border border-white" />
                )}

                {currentIndex === slides.length - 1 ? (
                  <View className="flex items-center w-full">
                    
                    <CustomButton title="Create an account" handlePress={()=> router.push('/sign-up')} containerStyles="bg-green mb-5 w-full"   />
                  
                    <CustomButton title="Login" handlePress={()=> router.push('/sign-in')} containerStyles="border border-white w-full" />
                  </View>
                ) : (
                  <CustomButton title="Next" handlePress={handleNext} containerStyles="bg-green" />
                )}
              </View>
            </View>
          </ImageBackground>
        )}
      />
    </SafeAreaView>
  );
}

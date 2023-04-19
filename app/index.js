import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";

export default function Page() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className={"text-5xl"}>asd</Text>
			<Pressable>
				<Text>Explore</Text>
			</Pressable>
			<StatusBar style="auto" />
		</View>
	);
}

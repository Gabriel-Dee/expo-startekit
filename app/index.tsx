import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function Index() {
  return (
    <StyledView className="flex-1 items-center justify-center bg-gray-800">
      <StyledText className="text-3xl">Home screen</StyledText>
      <Link href="/profile">Profile</Link>
    </StyledView>
  );
}

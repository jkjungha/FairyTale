import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation';
import { color, standardFontSize, standardHeight, standardWidth } from 'styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Image} from 'react-native';

const Background = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    background-color: ${color.text.caution1};
    padding-bottom: ${standardHeight(90)}px;
`;

const BackgroundImage = styled(View)`
    flex: 7;
    align-items: center;
    justify-content: flex-end;
    background-color: ${color.text.caution1}
    padding-bottom: ${standardHeight(50)}px;
`;

const LoginButton = styled(Pressable)`
    width: ${standardWidth(200)}px;
    height: ${standardHeight(40)}px;
    background-color: ${color.button.disabled};
    justify-content: center;
    align-items: center;
    border-radius: ${standardWidth(15)}px;
    margin-bottom: ${standardHeight(10)}px;
`;

const ButtonText = styled(Text)`
    font-size: ${standardFontSize(18)}px;
    font-color: ${color.text.main};
    font-weight: bold;
`;

type FrontScreenProp = StackNavigationProp<RootStackParamList, 'FrontScreen'>;

/** 초기 화면 */
export default function FrontScreen() {
    const navigation = useNavigation<FrontScreenProp>();

    return (
        <SafeAreaView mode="margin" edges={['right', 'left', 'bottom']} style={{ flex: 1 }}>
            <BackgroundImage>
          <Image source={require('./image/FairyTeller.png')} style={{ width: 450, height: 100}} />
          <Image source={require('./image/book.png')} style={{ width: 200, height: 200}} />
        </BackgroundImage>
            <Background>
            <Image source={require('./image/leaf-shapes.png')} style={{ width: '100%', height: 50, position: 'absolute', padding: 230}} />
                <LoginButton onPress={() => navigation.navigate('SignUp')}>
                    <ButtonText>회원가입</ButtonText>
                </LoginButton>
                <LoginButton onPress={() => navigation.navigate('SignIn')}>
                    <ButtonText>로그인</ButtonText>
                </LoginButton>  
            </Background>
        </SafeAreaView>
    );
}

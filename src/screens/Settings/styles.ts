import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #FFFFFF ;
`;

export const Header = styled.SafeAreaView`
    width: 100%;
    height: 175px;
    flex-direction: row;
    border-bottom-width: 0.3px;
`;

export const GreetingWrapper = styled.View`
    padding: 25px;
`;
export const Greeting = styled.Text`
    font-size: 20px;
`;

export const UserName = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #4885ed
`;

export const WrapperPhoto = styled.TouchableOpacity`
    height: 100%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: 25px;
`;

export const Photo = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;
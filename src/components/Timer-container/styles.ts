import styled from "styled-components/native";

export const Container = styled.View`
    width: 350px;
    height: 180px;
`;

export const Wrapper = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-width: 3px;
    margin-bottom: 15px;
    margin-top: -90px;
`;

export const Hour = styled.Text` 
   font-size: 50px;
    font-weight: bold;
    color: #000000;
    margin-right: auto;
    margin-left: 60px;
    justify-content: center;
`;

export const SeparatorTime = styled.Text`
    font-size: 55px;
    font-weight: bold;
    color: #000000;
`;
export const Minutes = styled.Text`
 font-size: 50px;
    font-weight: bold;
    color: #000000;
    margin-left: auto;
    margin-right: 60px;

`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    margin-top: 170px;
    justify-content: center;
`;
export const ButtonWrapper = styled.TouchableOpacity`
    width: 150px;
    height: 50px;
    background-color: #000000;
    margin-top: 35px;
   justify-content: center;
    align-items: center;
    border-radius: 10px;

`;

export const Button = styled.Text`
    color: #FFFFFF;
    font-size: 25px;
    font-weight: bold;
`;

export const ResetButtonWrapper = styled.TouchableOpacity`
    width: 150px;
    height: 50px;
    background-color: #FFFFFF;
    margin-top: 35px;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    border-width: 1px;
    border-radius: 10px;

`;

export const ResetButton = styled.Text`
     color: #000000;
    font-size: 25px;
    font-weight: bold;
`;

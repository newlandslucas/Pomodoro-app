import React from 'react';
import * as Styled from './styles';

const Settings = () => {
    return(
        <Styled.Container>
            <Styled.Header>
                <Styled.GreetingWrapper>
                    <Styled.Greeting>Bom dia, </Styled.Greeting>
                    <Styled.UserName>Lucas</Styled.UserName>
                </Styled.GreetingWrapper>

                <Styled.WrapperPhoto>
                    <Styled.Photo 
                        source={{uri: 'https://avatars.githubusercontent.com/u/58925749?s=400&u=090b93bfb5d4c26839f6d00079f71490d19c5ba9&v=4'}}
                    />
                </Styled.WrapperPhoto>
            </Styled.Header>
        </Styled.Container>
    )
}

export default Settings;
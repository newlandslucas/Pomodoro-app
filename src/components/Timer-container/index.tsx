import React from 'react';
import * as Styled from './styles';

const TimerContainer = () => {
    return(
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Text>25</Styled.Text>
                <Styled.SubText>:00</Styled.SubText>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

export default TimerContainer;
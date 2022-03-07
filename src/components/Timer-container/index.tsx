import React, { useEffect, useState } from 'react';
import * as Styled from './styles';

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60 // 25 MINUTES

const TimerContainer = () => {

    const [secondsAmount, setSecondsAmount] = useState(0);

    useEffect(() => {
      if (secondsAmount === 0) {
          alert('Chegou ao fim!')
          return;
      }

      setTimeout(() => {
          setSecondsAmount(state => state - 1);
      }, 1000)
    }, [secondsAmount]);

    const minutes = Math.floor(secondsAmount / 60);
    const seconds = secondsAmount % 60;

    function StartCountdown() {
        setSecondsAmount(COUNTDOWN_INITIAL_TIME_IN_SECONDS)
    }

    function ResetCountdown() {
        setSecondsAmount(COUNTDOWN_INITIAL_TIME_IN_SECONDS)
    }

    return(
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Hour>{String(minutes).padStart(2, '0')}</Styled.Hour>
                <Styled.SeparatorTime>:</Styled.SeparatorTime>
                <Styled.Minutes>{String(seconds).padStart(2, '0')}</Styled.Minutes>
            </Styled.Wrapper>

            <Styled.ButtonContainer>
                <Styled.ButtonWrapper onPress={() => StartCountdown()}>
                    <Styled.Button>Start</Styled.Button>
                </Styled.ButtonWrapper>

                <Styled.ResetButtonWrapper onPress={() => ResetCountdown()}>
                    <Styled.ResetButton>Reset</Styled.ResetButton>
                </Styled.ResetButtonWrapper>
            </Styled.ButtonContainer>
          
        </Styled.Container>
    )
}

export default TimerContainer;
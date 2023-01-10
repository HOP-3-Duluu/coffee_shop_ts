import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    display: flex;
    width: ${({width}: {width: number}) => width};
    height: ${({height}: {height: number}) => height}
    justify-content: ${({justifyContent}: {justifyContent: string}) => justifyContent};
    align-items: ${({alingItems}: {alingItems: string}) => alingItems};
    flex-direction: ${({direction}: {direction: string}) => direction};
`;

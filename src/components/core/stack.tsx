import styled from 'styled-components/native';

export const Stack = styled.View`
  display: flex;
  flex-direction: ${({direction}: {direction: string}) => direction};
  justify-content: ${({justifyContent}: {justifyContent: string}) => justifyContent};
  align-items: ${({alignItems}: {alignItems: string}) => alignItems};
  width: ${({width}: {width: number}) => width};
  height: ${({height}: {height: number}) => height};
  border-radius: ${({border_radius}: {border_radius: number}) => border_radius};
  background-color: ${({bg}: {bg: string}) => bg};
`;

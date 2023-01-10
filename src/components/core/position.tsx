import styled from 'styled-components/native';

export const Position = styled.View`
  position: ${({position}: {position: string}) => position};
  bottom: ${({bottom}: {bottom: number}) => bottom}%;
  left: ${({left}: {left: number}) => left}%;
  top: ${({top}: {top: number}) => top}%;
  right: ${({right}: {right: number}) => right}%;
`;

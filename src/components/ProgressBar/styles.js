import styled, {keyframes} from "styled-components";

const progressBarAnimation = keyframes`
0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`
const progressBarAnimation2 = keyframes`
0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`
export const Span = styled.span`
  position: relative;
  overflow: hidden;
  display: block;
  height: 4px;
  z-index: 0;
  background-color: ${({theme}) => theme.progressBarBcg};
`;
export const InnerSpan = styled.span`
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 0px;
  transition: transform 0.2s linear 0s;
  transform-origin: left center;
  background-color: ${({theme}) => theme.progressBar};
  width: auto;
  animation: 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s infinite normal
    none running ${progressBarAnimation};
`;
export const InnerSpan2 = styled.span`
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 0px;
  transition: transform 0.2s linear 0s;
  transform-origin: left center;
  background-color: ${({theme}) => theme.progressBar};
  width: auto;
  animation: 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite normal none
    running ${progressBarAnimation2};
`;


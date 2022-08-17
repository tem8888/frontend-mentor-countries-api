import { InnerSpan, InnerSpan2, Span } from "./styles";

const ProgressBar = () => {
  return (
    <Span role="progressbar">
      <InnerSpan></InnerSpan>
      <InnerSpan2></InnerSpan2>
    </Span>
  );
};

export default ProgressBar;

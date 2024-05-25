import { useRouteError } from "react-router-dom";
import styled from "styled-components";
const ErrorStyle = styled.div`
  padding: 24px;
  text-align: center;
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <ErrorStyle>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorStyle>
  );
}

import { useRouteError } from "react-router-dom";

export function RootError() {
  const err = useRouteError();

  return (
    <div>
      <strong>Error {err.status || 500}</strong>:{" "}
      {err.statusText ?? err.message}
    </div>
  );
}

import Title from "../components/Title/Title";

export default function HomePage() {
  return (
    <>
      <Title>Home</Title>

      <div>
        <h1>
          Welcome! You got into our application, go through the registration
          <span role="img" aria-label="Greeting icon">
            🔐
          </span>{" "}
          for further work with the application. Thank you{" "}
          <span role="img" aria-label="Greeting icon">
            👋
          </span>
        </h1>
      </div>
    </>
  );
}

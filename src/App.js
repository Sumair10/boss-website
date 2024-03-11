import Main from "./components/Main";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url('https://wallpapers.com/images/featured/black-gold-background-optua4rlhb9gnk6t.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Main />
    </div>
  );
}

export default App;

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;

const Logo = () => {
  return (
    <h1>Far away</h1>
  );
}

const Form = () => {
  return (
    <div className="add-form">
      <h3>Wha do you need for your trip?</h3>
    </div>
  );
}

const PackingList = () => {
  return (
    <div className="list">
      LIST
    </div>
  );
}

const Stats = () => {
  return (
    <footer className="stats">
      You have X items on your list, and you already packed X (X%)
    </footer>
  );
}

function vulnerableQuery(userId) {
  // Intentionally insecure SQL query (mimic vulnerability)
  const query = `SELECT * FROM users WHERE id = '${userId}'`;  // SQL injection risk
  console.log(query);
}

function App() {
  const handleClick = () => {
    const userId = document.getElementById('userId').value;
    vulnerableQuery(userId);  // Mimicking a user input vulnerability
  };

  return (
    <div className="App">
      <header className="App-header">
        <input id="userId" type="text" placeholder="Enter user ID" />
        <button onClick={handleClick}>Submit</button>
      </header>
    </div>
  );
}

export default App;

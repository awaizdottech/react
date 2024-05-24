function App() {
  const str =
    "this is called evaluated expression which can be inserted in jsx because normal js isnt allowed in jsx. only results of js computation is allowed hence evaluated expression"; // for knowing why normal js isnt allowed head to main.jsx
  return (
    <>
      <p className="read-the-docs">nice {str}</p>
    </>
  );
}

export default App;

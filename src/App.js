// import BookList from "./components/BookList";
// import Navbar from "./components/Navbar";
// import ThemeToggle from "./components/ThemeToggle";
// import AuthContextProvider from "./context/AuthContext";
// import ThemeContextProvider from "./context/ThemeContext";

import SongList from "./components/SongList";

function App() {
  return (
    <div className="App">
      <SongList/>
      {/* <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <BookList/>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvider> */}
    </div>
  );
}

export default App;

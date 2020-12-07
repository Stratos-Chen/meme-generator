import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import EditMeme from "./EditMeme";
import MemeList from "./MemeList";

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
      <EditMeme />
      <MemeList />
    </div>
  );
}
export default App;

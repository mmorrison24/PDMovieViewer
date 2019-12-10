import React from 'react';

const Poster = ({ data }) => (
    <div
        class="bg-gray-400 border m-2 rounded-lg shadow-md p-6"
        style={{
            width: "185px"
        }}
    >
        <img src={data} alt="poster"></img>
    </div>
);

function App() {
  return (
    <div className="App w-full">
      <header className="App-header">
        <h2 className="text-4xl">Movie Viewer</h2>
      </header>

        <Poster data={"test"} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

const tmdb_api_key = "cd140517203d1d5fbed8108980313abc";

const Poster = ({ data }) => (
    <div
        class=" border m-2 rounded-lg shadow-md p-3"
        style={{
            width: "200px"
        }}
    >
        <img src={data} alt="poster"></img>
    </div>
);

const getTMDBData = async () => {
    try {
        const res = await axios.get(
            `
      https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdb_api_key}`
        );

        let { results } = res.data;

        return results.map(p => "https://image.tmdb.org/t/p/w185/" + p.poster_path);
    } catch (error) {
        throw error;
    }
};

function App() {
    const [posters, setPosters] = useState([]);
    useEffect(() => {
        getTMDBData().then(data => {
            setPosters(data);
        });
    }, []);
    return (
        <div className="App w-full">
            <header className="flex flex-wrap my-4 mx-auto w-5/6">
                <h2 className="text-4xl">Movie Viewer</h2>
            </header>
            <div class="flex flex-wrap my-4 mx-auto w-5/6 justify-between">
                {posters.map(p => (
                    <Poster data={p} />
                ))}
            </div>
        </div>
    );
}

export default App;

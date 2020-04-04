import React from 'react';
import './assets/styles.css'
import Examples from "./components/example/examples";

function App() {

    return (
        <div style={{
            display: 'flex',
            padding: 16
        }}>
            <Examples/>
        </div>
    );
}

export default App;
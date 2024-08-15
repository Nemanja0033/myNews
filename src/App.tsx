import React, { useState } from 'react';
import Navbar from './components/navbar';
import Newsboard from './components/newsboard';

const App = () => {
  const [category, setCategory] = useState("general");
    return (
        <div>
            <Navbar setCategory={setCategory} />
            <br /><br /><br />
            <Newsboard category={category} />
        </div>
    );
}

export default App;

import {useState} from 'react'
import {FauxGrid} from "./FauxGrid.jsx";

function App() {
    const [externalFilter, setExternalFilter] = useState(false);
    const [results, setResults] = useState({});

    const loadGridData = ({reloadCount, internalFilter}) => {
        setResults({
            externalFilter: externalFilter,
            internalFilter: internalFilter,
            reloadCount: reloadCount.current
        })
    }

  return (
    <>
        <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "100vw"}}>
            <button onClick={() => setExternalFilter(!externalFilter)}>CHANGE EXTERNAL FILTER</button>
            <FauxGrid reloadDeps={[externalFilter]} data={results}  extLoadFunc={loadGridData}></FauxGrid>
        </div>

    </>
  )
}

export default App

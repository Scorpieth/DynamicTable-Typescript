import logo from './logo.svg';
import './App.css';
import DynamicTable from './dynamicTable/dynamicTable.tsx';
import { getTableData } from './dynamicTableTestData/dynamicTableTestData.ts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
			Dynamic table with size of 10
          	<DynamicTable tableData={getTableData(10)} />
			Dynamicc table with size of 15
			<DynamicTable tableData={getTableData(15)} />
      </header>
    </div>
  );
}

export default App;

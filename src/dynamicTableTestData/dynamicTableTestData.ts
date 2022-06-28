type TableData = {
    id: number,
    name: string,
    numberValue: number,
    dateValue: Date
}

const getTableData = (tableSize: number): TableData[] => {
    let array = [];
    
    for (let i = 0; i < tableSize; i++){
        let newTableData: TableData = {
            id: i,
            name: "CellName " + i,
            numberValue: 123,
            dateValue: new Date()
        }
        
        array.push(newTableData)
    }
    
    return array;
}

export {
    getTableData
}
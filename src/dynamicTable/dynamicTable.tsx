
/* Props for Dynamic table, can add as many props as needed */
interface IDynamicTableProps {
    tableData: IDynamicTableObject[],
    excludeKeys?: string[]
    /* i18nKey?: [string] Can be used to provide a translation key that will be used when rendering column(Keys) names */
    /* dateFormat: any  Can be used to be able to use formatting on the dates if they're not rendered in your desired way */
}

/* interface to allow for properties to be scoped in this file */ 
interface IDynamicTableObject { 
    id: number
}


const DynamicTable = ({tableData, excludeKeys = [] } : IDynamicTableProps) :JSX.Element => { /* Return type of JSX.Element, doesn't need to be defined */

    /* Returns all non-excluded keys, using Object.entries since its easier to use than Object.keys in typescript*/
    const columnEntries = Object.entries(tableData.find(obj => obj !== undefined)).filter(entry => !excludeKeys.includes(entry[0]));
    
    /* Renders the table head for the table, you can add a translation key as an input in the table Props and then add it in the rendering of the table head to have translated variable names */
    const renderTableHead = () => {
        return <tr>
            {columnEntries.map(entry => {
                return <th key={entry[0]}>{entry[0]}</th> /* Renders non-excluded keys , these are only the variable names, you can add translation ex. {t(i8nKey:entry[0])} */ 
            })}
        </tr>
    }
    
    const renderTableRows = () => {
        return tableData.map((data) => {
            return (
                <tr key={data.id}>
                {columnEntries.map(([key, value]) => {
                   return renderDataCell(data[key], key); /* Renders all the non-excluded variables */
                })}
            </tr>
            )
        })
    }

    /* Renders the value in a td element, can include added logic for specific value type handling*/
    const renderDataCell = (value, key) => {
        
        /* Parse Typescript Date Object to be rendered, can be extended to format the date properly with a input props date formatter*/
        if(value instanceof Date){
            console.log(' its a date ')
            return <td>{value.toString()}</td>
        }
        
        return <td key={key}>{value}</td>
    }
    
    /* Basic table, you can add more elements if you want to include some custom styling etc */
    return tableData ? (<table>
        <thead>
            {renderTableHead()}
        </thead>
        <tbody>
            {renderTableRows()}
        </tbody>
    </table>) : <></>;
}

export default DynamicTable;
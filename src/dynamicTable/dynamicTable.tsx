
/* Props for Dynamic table, can add as many props as needed */
interface IDynamicTableProps {
    tableData: object[],
    excludeKeys?: string[]
    /* i18nKey?: [string] Can be used to provide a translation key that will be used when rendering column(Keys) names */
    /* dateFormat: any  Can be used to be able to use formatting on the dates if they're not rendered in your desired way */
}


const DynamicTable = ({tableData, excludeKeys = [] } : IDynamicTableProps) => {
    /* Returns all non-excluded keys, using Object.entries since its easier to use than Object.keys in typescript*/
    /* Does not render headers of object values*/
    const columnKeys = tableData?.map(data => Object.entries(data).filter(([key, value]) => !excludeKeys.includes(key) && (value instanceof Date || typeof value !== 'object')))[0];
    /* Renders the table head for the table, you can add a translation key as an input in the table Props and then add it in the rendering of the table head to have translated variable names */
    console.log(columnKeys);
    const renderTableHead = () => {
         return <tr>
             {columnKeys.map(([key, value], i) => {
                 return <th key={i}>{key}</th> /* Renders non-excluded keys , these are only the variable names, you can add translation ex. {t(i8nKey:entry[0])} */
             })}
         </tr>
     }
    
    const renderTableRows = () => {
        return tableData?.map((data: any) => {
            return (
                <tr>
                {columnKeys?.map(([key, value]) => {
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
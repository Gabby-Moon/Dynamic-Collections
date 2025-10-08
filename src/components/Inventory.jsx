export default function Inventory(props) {
    const inventoryItem = props.inventory.map((item) => {
        return (
            <li key={item}>{item}</li>
        )
    })

    return (
            <span className="inventory">
            <p>Inventory:</p>
            <ul>
                {inventoryItem}
            </ul>
            </span>
    )

    
}
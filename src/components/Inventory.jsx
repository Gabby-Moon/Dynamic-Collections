export default function Inventory(props) {
    const inventoryItem = props.inventory.map((item) => {
        return (
            <li key={item}>{item}</li>
        )
    })

    return (
            <span className="inventory">
            <p><span className="font-label">Inventory:</span></p>
            <ul>
                {inventoryItem}
            </ul>
            </span>
    )

    
}
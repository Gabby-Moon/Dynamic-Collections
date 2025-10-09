export default function Inventory(props) {
    const inventoryItem = props.inventory.map((item) => {
        <li key={item}>{item}</li>
    })

    if (inventoryItem.length > 0) {
        return (
            <span className="inventory">
            <p><span className="font-label">Inventory:</span></p>
            <ul>
                {inventoryItem}
            </ul>
            </span>
        )
    } else {
        return (
            <p>Inventory is empty.</p>
        )
    }
}
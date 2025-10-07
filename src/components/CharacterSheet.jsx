export default function CharacterSheet(props) {
    const inventoryItem = props.inventory.map((item) => {
        return (
            <li>{item}</li>
        )
    })

    return (
        <div className="character">
            <h2>{props.name}</h2>
            <p>Race: {props.race}</p>
            <p>Class: {props.class}</p>
            <p>Level: {props.level}</p>
            <span className="inventory">
            <p>Inventory:</p>
            <ul>
                {inventoryItem}
            </ul>
            </span>
            
            <p>{props.isAlive}</p>
        </div>
    )
}
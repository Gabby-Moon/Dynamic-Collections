export default function CharacterSheet(props) {
    const inventoryItem = props.inventory.map((item) => {
        return (
            <li>{item}</li>
        )
    })

    return (
        <div className="character">
            <h2>{props.name}</h2>
            <p>{props.race}</p>
            <p>{props.class}</p>
            <p>{props.level}</p>
            <ul>
                {inventoryItem}
            </ul>
            <p>{props.isAlive}</p>
        </div>
    )
}
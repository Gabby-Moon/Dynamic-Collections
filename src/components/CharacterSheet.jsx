import Inventory from "./Inventory.jsx"
export default function CharacterSheet(props) {

    return (
        <div className={`character ${props.isAlive ? "alive" : "dead"}`}>
            
            <div className="character-left">
                <h2>{props.name}</h2>
                <p><span className="font-label">Race:</span> {props.race}</p>
                <p><span className="font-label">Class:</span> {props.class}</p>
                <p><span className="font-label">Level:</span> {props.level}</p>
            </div>

            <div className="character-right">
                <Inventory 
                    inventory={props.inventory}
                />
            </div>
        </div>
    )
}
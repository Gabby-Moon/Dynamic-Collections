import Inventory from "./Inventory.jsx"
export default function CharacterSheet(props) {

    return (
        <div className={`character ${props.isAlive ? "alive" : "dead"}`}>
            
            <div className="character-left">
                <h2>{props.name}</h2>
                <p>Race: {props.race}</p>
                <p>Class: {props.class}</p>
                <p>Level: {props.level}</p>
            </div>

            <div className="character-right">
                <Inventory 
                    inventory={props.inventory}
                />
            </div>
        </div>
    )
}
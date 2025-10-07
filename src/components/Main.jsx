import characterData from "./characters.js"

export default function Main() {
    const characters = characterData.map((character) => {
        return (
            <CharacterSheet
                key = {character.name}
                name = {character.name}
                race = {character.race}
                class = {character.class}
                level = {character.level}
                inventory = {character.inventory}
                isAlive = {character.isAlive}
            />
    )
    })
    return (
        <div className="container">
            {characters}
        </div>
    )
}
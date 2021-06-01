import React from 'react'
import CharacterCard from './CharacterCard'

const CharacterContainer = (props) => {

    return (
        <div>
            <CharacterCard key={props.id} characters={props.characters} quotes={props.quotes} episodes={props.episodes}/>
        </div>
    )
}

export default CharacterContainer

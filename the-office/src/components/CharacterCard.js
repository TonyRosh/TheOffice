import React from 'react'

const CharacterCard = (props) => {

    console.log('props', props)

    let characterDisplay = () => {
        return props.characters.map(character => {
            return <div className='character-card'>
                    <h2>{character.firstname}</h2>
                    <h4>{character.lastname}</h4>
                <img src={character.image} alt='character' />
            </div>
        })
    }

    return (
        <div className='card-div'>
            {characterDisplay()}
        </div>
    )
}

export default CharacterCard

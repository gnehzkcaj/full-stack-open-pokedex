import React from 'react'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container">
      {pokemonList.map(({ id, name }, index) => {
        if (!name) return null
        const nameLowercase = name.toLowerCase()

        return (
          <Link key={index} to={`/pokemon/${nameLowercase}`} className="list-item" style={{ backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})` }}>
            <div className="list-item-name">
              {nameLowercase}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default PokemonList






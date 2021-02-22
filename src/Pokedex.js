import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component {
    constructor(props) {
      super(props)
      this.state = { visible: 0 };
    }

    nextPokemon = () => {
      if (this.state.visible < this.props.pokemons.length - 1) this.setState( { visible: this.state.visible + 1 } );
      else this.setState({ visible: 0 });
    }

    render() {
        return (
            <div className="pokedex">
              <Pokemon key={ this.props.pokemons[this.state.visible] } pokemon={ this.props.pokemons[this.state.visible] } />
              <button className="nextPokemonBtn" onClick={ this.nextPokemon }>Next Pokemon</button>
            </div>
        );
    }
}

export default Pokedex;
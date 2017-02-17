import React from 'react';

function Card({id, name, email}) {
    return(
        <div className="bg-light-green dib pa3 ma2 tc br3 grow">
            <img
              role="presentation"
              src={`//robohash.org/${id}?size=200x200`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

Card.propTypes = {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
}
export default Card;

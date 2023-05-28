import React from 'react';

function UserDetails({ idade }) {
    return (
        <div>
            {idade >= 18 ? <p>Pode tirar a habilitação</p> : <p>Aguarde mais {18 - idade} anos para tirar sua habilitação.</p>}
        </div>
    );
}

export default UserDetails;
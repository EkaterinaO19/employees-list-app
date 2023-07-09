import React from 'react';

function NoConnectionMessage() {
    return (
        <div className={"bg-red-800"}>
            <h1 className={"font-bold text-xl mb-2 text-white"}>No connection...Please reload or wait</h1>
        </div>
    );
}

export default NoConnectionMessage;
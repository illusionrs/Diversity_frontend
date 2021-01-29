import React from 'react'

export default function Snippet({snippet}) {
    return (
        <div>

            { snippet.title && <h2>{snippet.title} </h2>}
            {snippet.description && <p>{snippet.description}</p>}
            {snippet.code && <pre>
                <code>
                    {snippet.code}
                    </code>
                    </pre>}
            
        </div>
    )
}

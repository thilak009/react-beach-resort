import React from 'react'

function Hero({children,hero="defaultHero"}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

export default Hero

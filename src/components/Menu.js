import React from 'react'

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='Menulinks'>
                <a href='#aboutme'>About Me</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
            <div className='menu-btn'>
                <a href={resume} download>
                    Resume
                </a>
            </div>
        </div>
    )
}
export default Menu
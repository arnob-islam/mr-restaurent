import React from 'react'

const SectionTitle = ({ small, big }) => {
    return (
        <div className='section-title-container'>
            <div className="title-wrapper">
                <div className="title_small">
                    <span>
                        {small}
                    </span>
                </div>
                <div className="title_big">
                    <h3> {big}</h3>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle

import React from 'react'

const FoodCover = () => {
    return (
        <section className='section-food-cover' style={{ padding: '0' }}>
            <div className="container-fluid">
                <div className="food_container row">
                    <div className="food_cover_singel col-sm-8" style={{ background: `url(https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb2QlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)` }}>
                        <div className="title">
                            <h2 className="glob_h2">
                                LAND OF DELICIOUS
                            </h2>
                        </div>
                    </div>
                    <div className="food_cover_singel col-sm-8" style={{ background: `url(https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZvb2QlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)` }}>
                        <div className="title">
                            <h2 className="glob_h2">
                                mood good guranty
                            </h2>
                        </div>
                    </div>
                    <div className="food_cover_singel col-sm-8" style={{ background: `url(https://images.unsplash.com/photo-1569201529241-f96205e2f2c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2QlMjBwaG90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60` }}>
                        <div className="title">
                            <h2 className="glob_h2">
                                at low cost
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FoodCover

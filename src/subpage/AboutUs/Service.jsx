import { Button } from '@material-ui/core'
import React from 'react'

const Service = () => {
    const [readMore, setreadMore] = React.useState(false)


    const item = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus officiis quis ullam sed suscipit, dicta labore tempora nobis necessitatibus fugit quod esse. Sequi maiores modi perferendis, excepturi nesciunt unde!`

    return (
        <section className='about_service'>
            <div className="container">
                <div className="row daww8">
                    <div className="img_container">
                        <img src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="contents">
                        <div className="title">
                            <span className="__span">
                                are you hangry ?
                            </span>
                        </div>
                        <div className="main_title py-4">
                            <h2 className="glob_h2">
                                we will give you the best and healty food in you area
                            </h2>
                        </div>
                        <div className="description">
                            <p>
                                {readMore ? item : `${item.substring(0, 70)}`}
                            </p>

                        </div>
                        <div className="button_container">
                            <Button onClick={() => setreadMore(!readMore)}>
                                {readMore ? 'show less' : '  read more'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service

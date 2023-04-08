import React from 'react'

const Menu = ({items}) => {
return (
    <>
        <div className="row">
            <div className="col-md-6">
                {items.map((item) => {
                    const { id, name, price, image, info, category } = item;
                    return (
                        <>
                            <div className="row">
                                <div className="col-lg-6 p-0">
                                    <img style={{ width: '100%', height: '250px', objectFit:'cover'}} src={image} alt="" />
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h6>{name}</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h6>{price}</h6>
                                        </div>
                                    </div>
                                </div>
                                <p>{info}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    </>
)
}

export default Menu
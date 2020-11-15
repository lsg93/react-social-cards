import React from 'react';
import {BsPerson} from 'react-icons/bs'

const SplashImage = (props) => {

        return (  

            <div className="hide-xs splashImg column p-0" style={{'backgroundColor' : props.splashColour}} >

                {/* top picture */}

                <div className="col-4 my-2">
                    <div style={{"backgroundColor": "black"}} className="topPicture py-1 col-4 ml-1 text-light flex-centered s-square">{props.initials}</div>
                </div>

                {/* background text */}

                <div className="columns splashTitle">
                    <div className="col-1">&nbsp;</div>
                    <span className="col-10" >{props.title}</span>
                </div>

                {/* bottom picture + author name */}


                <div className="columns bottom bottomTag py-1 mr-1 px-0 col-4 col-ml-auto">
                        <div className="columns col-oneline col-12 col-gapless">
                            <div className="column p-0 col-9 flex-centered">
                                <div style={{'color' : props.splashColour}} className=" text-bold text-small text-center">{props.authorName}</div>
                            </div>
                            <div className="column col-3 p-0">
                                <div className="personIcon column p-0 col-12 col-ml-auto mr-1 flex-centered s-square"><BsPerson/></div>
                            </div>
                        </div>
                    </div>
                </div>
            

        );
    }

 
export default SplashImage;
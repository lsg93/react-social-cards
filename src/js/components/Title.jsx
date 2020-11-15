import React from 'react'
import {BsChevronDown} from 'react-icons/bs'

const Title = (props) => {

        return (
                <div className="pb-2">
                    <div className="d-flex">
                        <span className="text-bold text-tiny nowrap">{props.username}&nbsp;</span>
                        <span className="text-tiny text-ellipsis text-muted">{props.twitter}&nbsp;</span>
                        <span className="text-tiny text-muted nowrap"><span className="bullet">&bull;</span> {props.date}</span>

                        <span className="col-ml-auto text-muted"><BsChevronDown/></span>
                    </div>
                    <div className="text-tiny">{props.title}</div>
                    <div className="text-tiny"><span>{'\{'}author : <span className="titleLink c-hand">{props.authorTwitter}</span>{'\}'}</span></div>
                </div>
        )

}



export default Title
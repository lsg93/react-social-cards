import React, { Component } from 'react';
import Avatar from './Avatar.jsx'
import Title from './Title.jsx'
import SplashImage from './SplashImage.jsx'
import Caption from './Caption.jsx'
import Buttons from './Buttons.jsx'

class SocialCard extends Component {

    constructor(props) {
        super(props)
    }

    render () {

        let initials = this.props.authorName.split(' ').map((v) => v[0]).join('')
        let {username, twitter, authorTwitter, date, title} = {...this.props}
        let titleData =  {username, twitter, authorTwitter, date, title}
        let authorName= this.props.authorName
        let splashColour = this.props.splashColour
        let splashData = {initials, authorName, title, splashColour}
        let tagline = this.props.tagline
        let link = this.props.link
        let captionData = {title, tagline, link}
        let buttonData = this.props.engagement
        
        return (
                <div className="columns col-mx-auto socialCard col-12 pt-1">
                    <div className="column col-2 p-0 mt-2">
                        <div className="col-12 flex-centered">
                            <Avatar initials={initials}/>
                        </div>
                    </div>
                        <div className='column col-10 p-0 card cardBorder'>
                            <Title {...titleData}/>
                            <SplashImage {...splashData}/>
                            <Caption {...captionData}/>
                            <Buttons {...buttonData} />
                        </div>
                </div>
        )

    }

}

export default SocialCard

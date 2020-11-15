import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { FaRetweet} from 'react-icons/fa';
import {BsChat, BsHeart, BsHeartFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi'

class Buttons extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            comments : this.props.comments,
            retweets: this.props.retweets,
            likes : this.props.likes,
            retweeted : this.props.activity.retweeted,
            liked : this.props.activity.liked
        }

        this.handleEngagement = this.handleEngagement.bind(this)
    }

    handleEngagement(event) {

        let action = ReactDOM.findDOMNode(event.target.closest('svg')).getAttribute('class').split(' ')[0]

        this.setState( (prevState) => {

            if (action == 'retweet') {

              return {
                  retweets : (prevState.retweeted) ? prevState.retweets - 1 : prevState.retweets + 1, 
                  retweeted : !prevState.retweeted 
                }

            } else {

                return {
                    likes : (prevState.liked) ? prevState.likes - 1 : prevState.likes + 1, 
                    liked : !prevState.liked
                }

            }
            
        })

    }

    render() { 

        let likeIcon 
            
        if (this.state.liked) { 
            
            likeIcon = <BsHeartFill className="like liked c-hand" onClick={this.handleEngagement}/> 
    
        } else {

            likeIcon = <BsHeart className="like c-hand" onClick={this.handleEngagement}/>

        }

        return (   

            <div className="column">
                
                <div className="columns pt-2  col-oneline">

                <div className="col-2 pb-2 flex-centered">
                        <BsChat className="c-hand"/>
                            <div className="ml-2 text-tiny">
                                {this.props.comments}
                        </div>
                    </div>
                    
                    <div className="col-2 pb-2 flex-centered">
                        <FaRetweet onClick={this.handleEngagement} className={`retweet c-hand text-large ${(this.state.retweeted) ? 'retweeted' : ''}`}/>
                            <div className={`ml-2 text-tiny ${(this.state.retweeted) ? 'retweeted' : ''}`}>
                                {this.state.retweets}
                        </div>
                    </div>

                    <div className="col-2 pb-2 flex-centered">
                        {likeIcon}
                            <div className={`ml-2 text-tiny ${(this.state.liked) ? 'liked' : ''}`}>
                                {this.state.likes}
                            </div>
                    </div>

                    <div className="col-1 pb-2 flex-centered">
                        <HiOutlineMail className="c-hand"/>
                    </div>
                
                </div>
            
            </div>

         );
    }
}
 
export default Buttons;
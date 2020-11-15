import {hot} from 'react-hot-loader/root'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SocialCard from './components/SocialCard.jsx'
import 'spectre.css'
import '../css/styles.css'

const articleData = [
    {
        username : 'The Practical Dev',
        twitter : '@ThePracticalDev',
        date : 'Sep 10',
        title: 'Learning React? Start Small.',
        tagline: 'Can\'t pry yourself away from the tutorials? The cure is to make tiny little experiment apps.',
        authorTwitter: '@dceddia',
        authorName : 'Dave Ceddia',
        link: 'dev.to',
        splashColour : '#fea003' 
    },
    {
        username : 'New To React',
        twitter : '@NewToReact',
        date : 'Oct 10',
        title: 'Social Card Project.',
        tagline: 'Project 1/6 from Dave Ceddia\'s 6 React project ideas for beginners.',
        authorTwitter: 'lsg93',
        authorName : 'Lawrence',
        link: 'daveceddia.com',
        splashColour : '#861af2',
        
    }
]

const articleStats = [
{
    comments: 2,
    retweets: 47,
    likes : 190,
    activity : {'retweeted' : true, 'liked' : true}
},
{
    comments: Math.floor(Math.random() * 1000),
    retweets: Math.floor(Math.random() * 1000),
    likes : Math.floor(Math.random() * 1000),
    activity : {'retweeted' : false, 'liked' : false}
}
]

class App extends Component {

    constructor(props) {

        super(props)

    }

    render () {


        return( 

            <div className="container columns px-0 mx-0 ">
                    <div className="column hide-sm col-md-2 col-3"></div>
                    <div className="cardHolder col-sm-12 col-md-8 column col-6">
                        {
                            articleData.map((v,k) => {

                                return <SocialCard key={k} engagement={articleStats[k]}  {...v}  />

                            })
                        }
                    </div>
                <div className="column hide-sm col-md-2 col-3"></div>
            </div>
        )

    }

}

export default hot(App)

ReactDOM.render(<App/>, document.getElementById('displayCards'))
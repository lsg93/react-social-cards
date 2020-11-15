import React, {Component} from 'react';

class Avatar extends Component {

   constructor(props) {

      super(props)

      this.state = {}

      this.checkWidth = this.checkWidth.bind(this)

   }

   checkWidth() {
      
      let width = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
      );

      this.setState({width})

   } 

   componentDidMount() {

      window.addEventListener('resize', this.checkWidth)
      this.checkWidth()

   }

   componentWillUnMount() {

      window.removeEventListener('resize', this.checkWidth)

   }

   render() {

      let avatarSize 

      if (Object.keys(this.state).length !== 0) {

         switch (true) {

            case (this.state.width > 960):
               avatarSize = 'avatar-xl'
               break;

            case (this.state.width <= 960 && this.state.width >= 400):
               avatarSize = 'avatar-lg'
               break;

            case (this.state.width < 400 && this.state.width >= 250):
               avatarSize = 'avatar-md'
               break;

            case (this.state.width < 250):
               avatarSize = 'avatar-sm'
               break

         }
      
      }

      return <div className={`avatar ${avatarSize} black`} data-initial={this.props.initials} ></div>

   }

}

export default Avatar
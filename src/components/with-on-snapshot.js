import React from 'react';
import db from '../firebase';
import { getCurrentUser, getStreamer } from '../utils'

export const withOnSnapshot = (WrappedComponent, streamerDisplayName) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        user: null,
        streamer: null
      };
      this.unsubscribers = []
    }

    async componentDidMount() {
      const user = await getCurrentUser()
      const streamer = await getStreamer(streamerDisplayName)

      if(user) {
        this.unsubscribers.push(db.collection('jammers').doc(user.email).onSnapshot(doc => {
          const userData = doc.data()
          this.setState({
            user: userData
          })
        }))
      }

      if(streamer) {
        this.unsubscribers.push(db.collection('jammers').doc(streamer.email).onSnapshot(doc => {
          const streamerData = doc.data()
          this.setState({
            streamer: streamerData
          })
        }))
      }
    }

    componentWillUnmount() {
      if(this.unsubscribers.length) {
        this.unsubscribers.forEach(u => u())
      }
    }

    render() {
      const { user, streamer } = this.state
      return <WrappedComponent user={user} streamer={streamer} {...this.props} />
    }
  }
}

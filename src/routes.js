import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import { SignUp, Login, StreamerVid, ViewerVid, StreamPage, AccountInfo, PageNotFound, Home, Channels, About, StreamNav } from './components';
=======
import { SignUp, Login, StreamerVid, ViewerVid, StreamPage, AccountInfo, PageNotFound, Home, Channels, About } from './components';
import StreamerAbout from './components/streamer-about'
>>>>>>> master

export default class Routes extends Component {
  componentDidMount() {
    //auth stuff?
  }

  render() {
    return (
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/streamer" component={StreamerVid} />
        <Route exaxt path="/streamer-about" component={StreamerAbout} />
        <Route exact path="/viewer" component={ViewerVid} />
        <Route exact path="/channels" component={Channels} />
        <Route exact path="/about" component={About} />
        <Route exact path="/channels/:displayName/account" component={AccountInfo} />
        <Route exact path="/channels/:displayName/profile" component={StreamPage} />
        <Route exact path="/channels/:displayName" component={StreamNav} />
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

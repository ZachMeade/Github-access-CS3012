import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form.jsx';
import Repos from './components/Repos.jsx';
import ProfileDetails from './components/ProfileDetails.jsx';
import Plot from 'react-plotly.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      gitun: 'No username',
      infoclean : '',
	  repos : '',
      formData: {
        username: '',
      },
}
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange= this.handleFormChange.bind(this);

  }
handleUserFormSubmit(event) {
    event.preventDefault();
	axios.get('https://api.github.com/users/'+this.state.formData.username+'/repos?access_token=0393c72a7bb5ddca6450b428aec4093247c8baf2').then(response => this.setState({
      repos : response.data,
    })).catch((err) => { console.log(err); });

       axios.get('https://api.github.com/users/'+this.state.formData.username+'?access_token=0393c72a7bb5ddca6450b428aec4093247c8baf2').then(response => this.setState({
      infoclean: '',
      gitun: response.data.login,
      infoclean: response.data,
    })).catch((err) => { console.log(err); });



}

handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };
render() {
    return (

<div className="App .bg-gradient-light">


	  <main role="main">

		<br></br>

        <div class="row justify-content-left text-dark bounce-in-top"> <div class="col-md-12 text-center">
        <div>
        <img
        src={ require('./images/githublogogrey.jpg') }
        style={{width: 200, height: 200}}

        />

        </div>
        <Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        />
		</div></div><br></br><br></br>

		<div class="row justify-content-left text-dark">

		<div class="col-md-3 text-left border-right slide-in-left">
        <ProfileDetails infoclean={this.state.infoclean}/>
		</div>
		<div class="col-md-9 text-left">
		<Repos repos={this.state.repos} infoclean={this.state.infoclean}/>
		</div>
		</div>





	</main>
	</div>
    );
  }
}
export default App;

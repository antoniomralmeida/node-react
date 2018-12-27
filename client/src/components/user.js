import React, {Component} from 'react';

class Users extends Component {
  state = {
    response: []
  };

  componentDidMount() {
    this.fetch('/user/list')
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div >
        <h2>Usuários</h2>
                  
      </div>
    );
  }
}

export default Users;
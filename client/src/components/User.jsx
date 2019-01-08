import React, {Component} from 'react';
import { Table } from 'reactstrap';

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.callApi()
      .then(users => this.setState({users}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/user/find');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div >
        <h2>Usuários</h2>
        <Table className="table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {this.state.users.map(user => 
            <tr key={user.id}><th>{user.id}</th> <td>{user.username}</td></tr>
            )}   
          </tbody>
          </Table>     
      </div>
    );
  }
}

export default Users;
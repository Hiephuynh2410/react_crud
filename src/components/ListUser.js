import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ListUser()  {

    const[users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/api/user/')
            .then(function (response) {
                console.log(response.data);
                setUsers(response.data);
        });
    }
    return  (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) => 
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`users/${user.id}/edit`}/>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from '../../services/fetchServices';

const FetchExample = () => {

    const [ users, setUsers ] = useState([]);
    const [ pages, setPages ] = useState(2);
    const [ selectedUser, setSelectedUser ] = useState();
    const [ totalUsers, setTotalUsers] = useState(12);
    const [ usersPerPage, setUsersPerPage] = useState(6);

    useEffect(() => {
        obtainUsers();
    }, []);


    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All Users', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining users:');
                console.table(users);
            });
    }

    const obtainPageUsers = (page) => {
        getAllPagedUsers(page)
        .then((response) => {
            console.log('All Page Users', response.data);
            setUsers(response.data);
            setPages(response.total_pages);
            setTotalUsers(response.total);
            setUsersPerPage(response.per_page);
        })
        .catch((error) => {
            alert(`Error while retreiving the users: ${error}`)
        })
        .finally(() => {
            console.log('Ended obtaining users:');
            console.table(users);
        });
    }

    const obtainUserDetails = (id) =>{
        getUserDetails(id)
        .then((response) => {
            console.log('User Details', response.data);
            setSelectedUser(response.data);
;
        })
        .catch((error) => {
            alert(`Error while retreiving the user: ${error}`)
        })
        .finally(() => {
            console.log('Ended obtaining user:');
            console.table(selectedUser);
        });
    }

    const authUser = () => {
        login('eve.holt@reqres.in','cityslicka')
            .then((response) => {
                console.log('TOKEN', response.token);
                sessionStorage.setItem('token', response.token);
    ;
            })
            .catch((error) => {
                alert(`Error while login the user: ${error}`)
            })
            .finally(() => {
                console.log('Ended login user. Navigate to home');
                
            });
    }

    return (
        <div>
            
            {/*Botton to simulate login */}
            <button onClick={()=>authUser()}>Auth User</button>

            <h2>
                Users:
            </h2>
            { users.map((user, index) => 
                (<p key={index} onClick={() => obtainUserDetails(user.id)} style={{cursor: 'pointer'}}>
                    {user.first_name} {user.last_name}
                </p>)
                ) 
            }
            <p>Showing: {usersPerPage} users of {totalUsers}</p>
            <button onClick={()=> obtainPageUsers(1)}>
                1
            </button>
            <button onClick={()=> obtainPageUsers(2)}>
                2
            </button>
            

            <div>
                
                { selectedUser != null ?
                    selectedUser && (
                        
                        <div>
                            <h3 style={{margin: '30px 0 15px', color: 'teal'}}>User Details:</h3>  
                            <p>Name: {selectedUser.first_name}</p>
                            <p>Last Name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                            <img src={selectedUser.avatar} style={{height: '100px', width: '100px'}} alt='Avatar'/>
                        </div>
                        
                        ):
                        (<h6>Please Click on a User to see the details</h6>)
                }
            </div>
        </div>
    );
}

export default FetchExample;

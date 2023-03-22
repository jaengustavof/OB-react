import React, {useState, useEffect} from 'react';
import getRandomUser from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);


    /*
    useEffect(() => {
       
        obtainUser();

    }, []);
    */

    const obtainUser = () => {
        getRandomUser()
        .then((response)=>{
            if(response.status === 200){
                setUser(response.data.results[0])
                // console.log(response.data.results[0])
            }
        })
        .catch((error) => alert(error))
    }

    return (
        
        <div>
            <h1>Axios Example</h1>
            {
                user != null ? (
                    <div>
                        <img alt='Avatar' src={user.picture.large}/>
                        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                        <h3>{user.email}</h3>
                        <button onClick={()=> obtainUser()}>Random User</button>  
                    </div>
                    
                    ): (
                        <div>
                        <button onClick={()=> obtainUser()}>Random User</button>    
                        </div>
                    )
            }
        </div>
    );
}

export default AxiosExample;

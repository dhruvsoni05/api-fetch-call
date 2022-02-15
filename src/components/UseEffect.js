import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [user, setUser] = useState([]);

    const getUser = async () => {
        const response = await fetch('https://api.github.com/users');
        setUser(await response.json());
    }

    useEffect(()=>{
        getUser();
    },[])

  return (
    <>
        <h2>List of users</h2>

        <div className="container-fluid mt-5">
            <div className="row text-center">

                {
                    user.map((curElem) => {
                        return(
                            <>
                                <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                                    <div className="card p-2">
                                        <div className="image"> <img src={curElem.avatar_url} className='rounded' width="155px" alt="" /> </div>
                                        <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{curElem.login}</h4> <span className='textLeft'>Web dev</span>
                                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column m-2"> <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                <div className="d-flex flex-column m-2"> <span className="followers">Followers</span> <span className="number1">140</span> </div>
                                                <div className="d-flex flex-column m-2"> <span className="ratings">Ratings</span> <span className="number1">4</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

                
            </div>
        </div>
    </>
  )
}

export default UseEffect
import React from "react";
import { faker } from "@faker-js/faker";

const Profile = () => {
    return (
        <div className="card" style={{width : "18rem;"}}>
            <h5> Name : {faker.person.fullName()}</h5>
            <p>ph. no. : {faker.phone.number()}</p>
            <p>Job : {faker.person.bio()}</p>

            <img
                style={{ width: 200, height: 200  }}
                src={faker.image.avatar()}
                alt="Random Avatar"
            />
        </div>
    );
};

export default Profile;

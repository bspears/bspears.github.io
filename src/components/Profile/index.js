import React from "react";
import "./styles.scss";

function Profile(props) {
    const { user } = props;

    function renderFields() {
        const fields = [
            ["First name", "firstName"],
            ["Last name", "lastName"],
            ["Phone", "phone"],
            ["Email", "email"],
            ["Bio", "bio"]
        ];

       return fields.map((field) => {
            return (
                <li className="field">
                    <div className="field-name">
                        {field[0]}
                    </div>
                    <div className="field-value">
                        {user[field[1]]}
                    </div>
                </li>
            );
        });
    }

    return (
        <section className="profile">
            <div className="title section-title">Profile</div>
            <div className="profile-main">
                <div className="avatar-container">
                    <img className="avatar" src={user.avatarImage} />
                </div>
                <div className="profile-details">
                    <ul className="profile-fields">
                        {renderFields()}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Profile;
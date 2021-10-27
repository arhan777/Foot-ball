import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import data from '../csvjson.json';
import './Profile.css';

function Profile() {
    let { playerName } = useParams();
    const [plrData, setPlrData] = useState(null);

    useEffect(() => {
        let playerData = data.filter((d) => d.Name === playerName);
        console.log(playerData[0]);
        if (playerData.length > 0) {
            setPlrData(playerData[0]);
        }
    }, [playerName])

    if (plrData === null) {
        return <h3>Loading</h3>
    }

    return (
        <div className="wrapper">
            {/* <h1> Football player Name {JSON.stringify(plrData)}</h1> */}
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="#">Help</Link>
                <div>
                    <h3 className="playerName">{playerName}</h3>
                </div>
            </div>
            <div className="profile-wrapper">
                <div className="graph">Graph data</div>
                <div>

                    <div className="performance">
                        <div>Overall {plrData.Overall}</div>
                        <div>potential {(plrData.Crossing+plrData.Finishing+plrData.HeadingAccuracy+plrData.ShortPassing)/4}</div>
                    </div>

                    <p>Age <span>{plrData.Age}</span></p>
                    <p>Height <span>{plrData.Height}</span></p>
                    <p>Weight <span>{plrData.Weight}</span></p>
                    <p>Preferred Foot <span>{plrData['Preferred Foot']}</span></p>
                    <p>Position <span>{plrData.Position}</span></p>
                    <p>Jersey Number <span>{plrData['Jersey Number']}</span></p>
                    <p>Weak Foot <span>{plrData.Age}</span></p>
                    <p>Skill Moves <span>{plrData.Age}</span></p>
                    <p>Work Rate(Attack-Defense) <span>{plrData['Work Rate']}</span></p>
                    <p>International Reputation <span>{plrData.Age}</span></p>
                </div>

            </div>
        </div>
    )
}

export default Profile;

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as villanService from '../../services/villanServices';
import AuthContext from "../../contexts/authContext";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

export default function VillanDetails() {
    const navigate = useNavigate();
    const { email, userId, username } = useContext(AuthContext);
    const [game, setGame] = useState({});
    const { gameId } = useParams();



    useEffect(() => {
        villanService.getOne(gameId)
            .then(setGame);

     
    }, [gameId]);

  
    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`${game.title} has been captured Dear ot Alive ? `);

        if (hasConfirmed) {
            await villanService.remove(gameId);

            navigate('/games');
        }
    }
    const isOwner = userId === game._ownerId;
    const editVillanCaptureHandler = async () => {
        try {
            await villanService.edit(gameId, { ...game, isCaptured: 'true' });
            navigate('/games/captured');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section id="game-details">
            <h1>Villan details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">Reward $ {game.maxLevel}</span>
                    <p className="type"> Crime commited: {game.category}</p>
                </div>

                <p className="text">Last known location: {game.summary}</p>

                {isOwner && (

                    <div className="buttons">
                        <Link to={pathToUrl(Path.VillanEdit, { gameId })} className="button">Edit</Link>
                        <button  onClick={deleteButtonClickHandler} className="button">Remove</button>
                        <button onClick={editVillanCaptureHandler} className="button">Captured</button>
                    </div>
                )}
            </div>

           
        </section>
    );
}

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as gameService from '../../services/gameService';
import AuthContext from "../../contexts/authContext";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";

export default function VillanDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [game, setGame] = useState({});
    const { gameId } = useParams();



    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame);

     
    }, [gameId]);

  
    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`${game.title} has been captured Dear ot Alive ? `);

        if (hasConfirmed) {
            await gameService.remove(gameId);

            navigate('/games');
        }
    }
    const isOwner = userId === game._ownerId;

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

                <p className="text">{game.summary}</p>

                {isOwner && (

                    <div className="buttons">
                        <Link to={pathToUrl(Path.GameEdit, { gameId })} className="button">Edit</Link>
                        <button  onClick={deleteButtonClickHandler} className="button">Remove</button>
                    </div>
                )}
            </div>

           
        </section>
    );
}

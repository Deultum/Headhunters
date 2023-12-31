import { useNavigate, useParams } from 'react-router-dom';

import * as villanService from '../../services/villanServices';
import { useEffect, useState } from 'react';

export default function VillanEdit() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
        
    });

    useEffect(() => {
        villanService.getOne(gameId)
            .then(result => {
                setGame(result);
            });
    }, [gameId]);

    const editVillanSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await villanService.edit(gameId, values);

            navigate('/games');
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setGame(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editVillanSubmitHandler}>
                <div className="container">
                    <h1>Edit villan</h1>
                    <label htmlFor="leg-title">Villan name:</label>
                    <input type="text" id="title" name="title" value={game.title} onChange={onChange} placeholder="Villan name" />

                    <label htmlFor="category">Wanted for:</label>
                    <input type="text" id="category" name="category" value={game.category} onChange={onChange} placeholder="Crime commited" />

                    <label htmlFor="levels">Reward $</label>
                    <input type="number" id="maxLevel" name="maxLevel" value={game.maxLevel} onChange={onChange} min="$" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={game.imageUrl} onChange={onChange} placeholder="Upload a photo..." />
                    <input
                        type="hidden"
                        id="isCaptured"
                        name="isCaptured"
                        value="false"
                    />
                    <label htmlFor="summary">More info:</label>
                    <textarea name="summary" value={game.summary} onChange={onChange} id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit info" />
                </div>
            </form>
        </section>
    );
}

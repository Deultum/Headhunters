import { useNavigate } from 'react-router-dom';

import * as gameService from '../../services/gameService';

export default function GameCreate() {
    const navigate = useNavigate();
    
    const createSubmitHandler = async (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await gameService.create(gameData);

            navigate('/games');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createSubmitHandler}>
                <div className="container">
                    <h1>Add vilan info</h1>
                    <label htmlFor="leg-title">Villan name:</label>
                    <input type="text" id="title" name="title" placeholder="Enter villan name..." />

                    <label htmlFor="category">Wanted for:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="levels">Reward $</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">More info:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}

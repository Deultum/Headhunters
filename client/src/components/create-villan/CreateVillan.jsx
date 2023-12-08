import { useNavigate } from 'react-router-dom';

import * as villanService from '../../services/villanServices';

export default function VillanCreate() {
    const navigate = useNavigate();

    const createSubmitHandler = async (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await villanService.create(gameData);
            console.log(gameData);
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
                    <h1>Add new outlaw </h1>
                    <label htmlFor="leg-title">Outlaw name:</label>
                    <input type="text"
                        id="title"
                        name="title"
                        placeholder="Enter villan name..."
                        required />

                    <label htmlFor="category">Wanted for:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Crime commited"
                        required />

                    <label htmlFor="levels">Reward $</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        placeholder="Price for capture"
                        required />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        required />
                    <input
                        type="hidden"
                        id="isCaptured"
                        name="isCaptured"
                        value="false"
                    />
                    <label htmlFor="summary">Last known location</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                        value="Register outlaw" />
                </div>
            </form>
        </section>
    );
}

import { useEffect, useState } from 'react';
import * as gameService from '../../services/gameService'
import VillantCard from './villantCard';

export default function Home({
    _id,
    accessToken,
    email,
}) {
    const [villans, setVillans] = useState([]);
    useEffect(() => {
        gameService.getLatest()
            .then(result => setVillans(result))
    }, [])

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Get your paycheck today</h2>
                <h3>The best headhunters website</h3>
            </div>
            <img src="./images/FBI_Most_Wanted.svg.png" alt="hero" />

            <div id="home-page">
                <h1>Latest in the list</h1>

                {villans.map(villan => <VillantCard {...villan} key={villan._id} />)}

                {!villans.length &&
                    <p className="no-articles">List empty</p>
                }
            </div>
        </section>
    );
}

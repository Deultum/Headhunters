import { useEffect, useState } from 'react';

import * as villanService from '../../services/villanServices';
import VillanListItem from './villan-listItem/VillanListItem';

export default function VillanList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        villanService.getAll()
            .then(result => setGames(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>Villans list</h1>

            {games.map(game => (
                <VillanListItem key={game._id} {...game} />
            ))}

            {games.length === 0 && (
                <h3 className="no-articles">No villans yet</h3>
            )}
        </section>
    );
}

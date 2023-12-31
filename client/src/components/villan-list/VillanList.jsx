import { useEffect, useState } from 'react';

import * as villanService from '../../services/villanServices';
import VillanListItem from './villan-listItem/VillanListItem';

export default function VillanList() {
    const [villans, setVillans] = useState([]);

    useEffect(() => {
        villanService.getAll()
            .then(result => setVillans(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="catalog-page">
            <h1>Villans list</h1>

            {villans.filter(villan => villan.isCaptured == 'false').map(villan => (
                <VillanListItem key={villan._id} {...villan} />
            ))}

            {villans.length === 0 && (
                <h3 className="no-articles">No villans yet</h3>
            )}
        </section>
    );
}

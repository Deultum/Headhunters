import { useEffect, useState, useContext } from 'react';
import * as villanService from '../../services/villanServices';
import CapturedVillansListItem from './CapturedVillansListItem';
import AuthContext from '../../contexts/authContext';

export default function CapturedList() {
    const { username, userId } = useContext(AuthContext);
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
            <h1>Captured list</h1>

            {villans.filter(villan => villan.isCaptured === 'true').map(villan => (
                <CapturedVillansListItem
                    key={villan._id}
                    {...villan}
                    gameId={villan._id} 
                    username={username}
                />
            ))}

            {villans.length === 0 && (
                <h3 className="no-articles">No villans captured</h3>
            )}
        </section>
    );
}

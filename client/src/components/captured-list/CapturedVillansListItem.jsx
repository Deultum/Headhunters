import { Link, useNavigate } from 'react-router-dom';
import * as villanService from '../../services/villanServices';

export default function CapturedVillansListItem({
    title,
    imageUrl,
    gameId,
    prize
}) {
    const navigate = useNavigate();

    const deleteVillan = async () => {

        
            try {
                await villanService.remove(gameId);
                navigate('/games');
            } catch (error) {
                console.error('Error while deleting:', error);
            }
        
    };
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} alt={title} />
                <h1>{title}</h1>
                <h6>For the prize of ${prize}</h6>
               
                <Link onClick={deleteVillan} className="details-button">
                    Remove from list
                </Link>
            </div>
        </div>
    );
}

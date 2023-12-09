import {  useNavigate } from 'react-router-dom';
import * as villanService from '../../services/villanServices';


export default function CapturedVillansListItem({
    title,
    imageUrl,
    gameId,
    prize,
    owner,
    loggedInUser,
}) {
    
    const navigate = useNavigate();

    const deleteVillan = async () => {

        
            try {
                await villanService.remove(gameId);
                navigate('/');
            } catch (error) {
                console.error('Error while deleting:', error);
            }
        
    };
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} alt={title} />
                <h1>{title}</h1>
                <h6>Amount paid for its head: ${prize}</h6>
               {loggedInUser === owner &&(
                   <button onClick={deleteVillan} className="details-button">
                    Remove from list

                </button>

               )}
            </div>
        </div>
    );
}

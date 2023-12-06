import { Link } from "react-router-dom";

export default function VillanListItem({
    _id,
    title,
    category,
    imageUrl,
}) {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h1>{title}</h1>
                <h6>{category}</h6>
                <Link to={`/games/${_id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}

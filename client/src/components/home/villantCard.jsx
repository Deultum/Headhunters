import { Link } from "react-router-dom";
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";
export default function VillantCard({
    imageUrl,
    title,
    _id,
}) {
    return (


        <div className="game">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{title}</h3>
            <div className="rating">
            </div>
            <div className="data-buttons">
                <Link to={pathToUrl(Path.GameDetails, { gameId: _id })} className="btn details-btn">Details</Link>
            </div>
        </div>
    );
}

import "./pin.scss"
import { Marker, Popup } from "react-leaflet"
import { Link } from "react-router-dom";

function Pin({ item }) {
    return (
        <Marker position={[item.latitude, item.longtitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item.img} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.Bedroom} bedroom</span>
                        <b>$ {item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin
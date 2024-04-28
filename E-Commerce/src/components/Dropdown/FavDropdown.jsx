import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import "./FavDropdown.css";

function FavDropdown({ favProducts, removeFromFav }) {
  return (
    <div className="fav-dropdown">
      <FavoriteBorderIcon fontSize="medium" />
      <div className="fav-menu">
        {favProducts.map((product, index) => (
          <div key={index} className="fav-dropdown-item">
            <img
              src={product.img}
              alt={product.name}
              className="fav-dropdown-img"
            />
            <div className="fav-dropdown-p">
              <p>{product.name}</p>
              <p>{product.price} DEN</p>
            </div>
            <div className="fav-dropdown-close">
              <DeleteIcon  onClick={() => removeFromFav(product)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavDropdown;

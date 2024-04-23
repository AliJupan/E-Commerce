import "./Dropdown.css";

function Dropdown({ name, menuitems }) {
  return (
    <div className="dropdown">
      <a>
        <p>{name}</p>
      </a>
      <div className="menu">
        {menuitems.map((item, index) => (
          <a key={index}>{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;

import React from "react";
function ShowAllLocation(props) {
  return (
    <div style={{ marginTop: 50 }}>
      Searched Weather Location
      {props.locationArray.map((item) => {
        return (
          <div key={item._id}>
            <span>
              {item.city} {item.country}
            </span>
            <button onClick={() => props.handleDeleteByID(item._id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default ShowAllLocation;
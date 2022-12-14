import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./dropdowncate.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function DropdownCate({
  selected,
  setSelected,
  selectedId,
  setSelectedId,
}) {
  const [isActive, setIsActive] = useState(false);
  const [listOfCate, setListOfCate] = useState([]);

  useEffect(() => {
    Axios.get("https://desolate-hollows-16342.herokuapp.com/api/category")
      // Axios.get("https://desolate-hollows-16342.herokuapp.com/readcate")
      .then((response) => {
        setListOfCate(response.data);
      })
      .catch(() => {
        alert("Awww, it didn't work at getting data");
      });
  }, []);
  return (
    <div className="dropdown cateflex">
      <h3 className="catechoose">Choose Category:</h3>
      <div>
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <ArrowDropDownIcon />
        </div>
        {isActive && (
          <div className="dropdown-content">
            {listOfCate.map((option, index) => (
              <div
                key={index}
                onClick={(e) =>
                  setSelectedId(option._id)(
                    setSelected(option.catename)(setIsActive(false))
                  )
                }
                className="dropdown-item"
              >
                {option.catename}
              </div>
            ))}
            {/* {listOfCate.map((data) => {
              console.log("data of listCate are", data.catename);
            })} */}
          </div>
        )}
      </div>
    </div>
  );
}

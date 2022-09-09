import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, newRegister } from "../redux/users/userActions";

function Create() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [gender, setGender] = useState("");
  const [entry,setEntry] = useState({
    name: '',
    email : '',
    gender : ''
  })

  const generate = useDispatch();
  const values = useSelector(state => state.user.values)
  //const details = values[0]
  return (
    <div style={{ display: "grid", marginLeft: "37%", marginTop: "3%" }}>
      <label>Name:</label>
      <input
        type="text"
        style={{ width: "29%", height: "30px" }}
        value={entry.name}
        onChange={(e) => setEntry({...entry,name:e.target.value})}
       // (e.target.value)}
      />
      <label>email:</label>
      <input
        type="text"
        style={{ width: "29%", height: "30px" }}
        value={entry.email}
        onChange={(e) => setEntry({...entry,email:e.target.value})}
        //setEmail(e.target.value)
      />
      <label>Gender:</label>
      <select
        style={{ width: "90px", marginBottom: "9px" }}
        name="language"
        value={entry.gender}
        onChange={(e) => setEntry({...entry,gender:e.target.value}) }
      >
        <option value="">Select</option>
        <option value="male"  >Male</option>
        <option value="female">Female</option>
      </select>
      <button
        style={{ width: "22%", height: "30px", marginLeft: "28px" }}
        onClick={() =>
          generate(newRegister(entry))
          //{ name: name, gender: gender, email: email }
        }
      >
        submit
      </button>
      {/* <p>name is {details}</p> */}
    </div>
  );
}

export default Create;

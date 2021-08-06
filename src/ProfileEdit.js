import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useGlobalContext } from "./userContext";

export default function ProfileEdit() {
  const { profileuserData, setProfileuserData } = useGlobalContext();
  const [photo, setPhoto] = useState(profileuserData.photo);
  const [name, setName] = useState(profileuserData.name);
  const [email, setEmail] = useState(profileuserData.email);
  const [mobile, setMobile] = useState(profileuserData.mobile);
  const [about, setAbout] = useState(profileuserData.about);

  const history = useHistory();
  const { id } = useParams();

  function handleSubmit() {
    if (!photo || !name || !email || !mobile || !about) {
      alert("Please provide all the details");
    } else {
      setProfileuserData({
        ...profileuserData,
        id,
        photo,
        name,
        email,
        mobile,
        about
      });
      history.push("/Profile");
      alert("Updated successfully");
    }
  }

  return (
    <>
      <div className="container">
        <h1>Edit Profile Details</h1>

        <div className="row">
          <div className="col-lg-6">
            <label>Edit Photo</label>
            <input
              type="text"
              name="email"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label>Profile Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label>About Info</label>
            <input
              type="text"
              name="mobile"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <label style={{ align: "center" }}></label>
            <input
              className="btn btn-primary"
              type="submit"
              value="Update"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useRef } from "react";

export default function Value() {
  const phoneRef = useRef();
  const nameRef = useRef();
  const onSub = (e) => {
    e.preventDefault();
    alert(
      "phone: " + phoneRef.current.value + "\nname: " + nameRef.current.value
    );
  };
  return (
    <div>
      <h1>Order form</h1>
      <form className="col-md-6" onSubmit={onSub}>
        <label>Name: </label>
        <input ref={nameRef} type="text" className="form-control"></input>
        <label>Phone: </label>
        <input ref={phoneRef} type="text" className="form-control"></input>
        <button className="btn btn-info mt-4">Add</button>
      </form>
    </div>
  );
}

import React, { useRef } from "react";
import { firestore } from "./firebase";
import { addDoc, collection } from "@firebase/firestore";

const home = () => {
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Enter Mesagge</label>
        <input type="text" ref={messageRef}></input>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default home;

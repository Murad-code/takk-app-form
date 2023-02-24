import React from "react";
import "./SignUpQuestions.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
function SignUpQuestions() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="Container">
      <div className="InnerContainer">
        <h2 className="Title">Welcome to Takk</h2>

        <p className="Subtitle">
          To ensure we can give you the best experience and serve you most
          relevant content please tell us a little about you.
        </p>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <span>What are your interests?</span>
          <input {...register("interests")} />
          <span>Where do you live?</span>
          <input {...register("address")} />
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpQuestions;

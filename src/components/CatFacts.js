import React from "react";

const CatFacts = ({ catFacts }) => {
  console.log(catFacts)
  return (
    <div className="catfacts">
      {catFacts && catFacts.map((catfact) => (
        <p key={catfact._id}>
          {catfact.text}
        </p>
      ))}
    </div>
  );
};

export default CatFacts;

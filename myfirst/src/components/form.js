import { useState } from "react";

function Form({ GetData }) {
  const [weight, setweight] = useState("");
  const [Height, setHeight] = useState("");
  const [alert, setalert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(Height)) {
      setalert(true);
      console.log("not valide input");
    } else {
      GetData(weight, Height);
      setalert(false);
      setHeight("");
      setweight("");
    }
  };

  //   let alertmesg;
  //   if (alert) {
  //     alertmesg = (
  //       <div className="alert alert-danger rounded text-center mb-3" role="alert">
  //         please enter valid dates
  //       </div>
  //     );
  //   } else {
  //     alertmesg = "";
  //   }

  return (
    <div className="col-sm-4 shadow rounded px-5 ">
      <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">weight(kg) :</label>
              <input
                type="text"
                className="form-control"
                value={weight}
                onChange={(e) => setweight(e.target.value)}
                required
              ></input>
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">height(m) :</label>
              <input
                type="text"
                className="form-control"
                value={Height}
                onChange={(e) => setHeight(e.target.value)}
                required
              ></input>
            </div>
          </div>
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="GET BMI"
          ></input>
        </div>
      </form>
      {/* {alertmesg} */}
      {alert ? (
        <div
          className="alert alert-danger rounded text-center mb-3"
          role="alert"
        >
          please enter valide dara
        </div>
      ) : null}
    </div>
  );
}

export default Form;

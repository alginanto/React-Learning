function Bmiscore({ BmiNum, BmiType, changeWeight }) {
  //const { BmiNum, BmiType } = props;
  console.log(changeWeight);
  return (
    <div className="text-center shadow rounded p-4 m-1">
      <h1 className="text-center pt-3 text-secondary h2">Tour BMI Score</h1>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">
          {BmiNum}
        </div>
      </div>
      <div className="fs-3 fw-bold text-primary"> {BmiType}</div>

      {changeWeight.type === "positive" && (
        <div className="fs-4">
          "You need lose
          <span></span>
          <span className="fw-bold">{changeWeight.wight} kg"</span>
        </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4">
          "You need gain
          <span></span>
          <span className="fw-bold">{changeWeight.wight} kg"</span>
        </div>
      )}
      {changeWeight.type === "normal" && (
        <div className="fs-4">"You weight is Normal,Good for you" </div>
      )}
    </div>
  );
}

export default Bmiscore;

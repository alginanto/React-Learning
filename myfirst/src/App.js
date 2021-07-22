import { useState } from "react";
import "./App.css";
import Bmilist from "./components/bmilist";
import Bmiscore from "./components/Bmiscore";
import Form from "./components/form";

function App() {
  //variable for hide/show other compnents(bmiscore and bmi list)
  const [show, setshow] = useState(false);
  //variable for showing weight gain or loss on bmiscore component
  const [changeWeight, setChangeWeight] = useState({ wight: "", type: "" });
  //calculate bmi
  const [bmi, setbmi] = useState("");
  //variable for what type
  const [BmiType, setBmiType] = useState("");
  //variable for find type of body mass index(bmi)
  const [bmiRange, setBmiRang] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });

  //fuction for get data from form submission
  const GetFormData = (weight, height) => {
    //to set setbmi
    let calBMI = calculateBMI(weight, height);
    setbmi(calBMI);
    //to set bmitype
    setBmiType(WeightType(calBMI));

    //set all bmi type
    const range = {
      underWeight: { low: calWeight(18.5, height) },
      normal: { low: calWeight(18.5, height), high: calWeight(24.9, height) },
      overWeight: { low: calWeight(25, height), high: calWeight(29.9, height) },
      obesityOne: { low: calWeight(30, height), high: calWeight(34.9, height) },
      obesityTwo: { low: calWeight(35, height), high: calWeight(39.9, height) },
      obesityThree: { high: calWeight(40, height) },
    };
    //set bmi range to state
    setBmiRang(range);
    console.log(weight, height);
    setChangeWeight(weightChange(calBMI, weight, range));
    setshow(true);
  };
  //function calculate BMI
  const calculateBMI = (weight, height) =>
    (weight / (height * height)).toFixed(2);
  //function calculate bmi type
  const WeightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity class III";
    }
  };

  //function calculate to get the weight difference
  const calWeight = (calBMI, height) => (calBMI * height * height).toFixed(2);

  //function for find loss or gain weight
  const weightChange = (b, w, range) => {
    let changeObj;
    if (b > 24.9) {
      changeObj = {
        wight: (w - range.normal.high).toFixed(2),
        type: "positive",
      };
      return changeObj;
    } else if (b < 18.5) {
      changeObj = {
        wight: (range.normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeObj;
    } else {
      changeObj = { wight: 0, type: "normal" };
      return changeObj;
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form GetData={GetFormData} />
        </div>
        {show && (
          <div className="row justify-content-center mt-5 mx-2">
            <div className="col-12 col-md-6 mb-5">
              <Bmiscore
                BmiNum={bmi}
                BmiType={BmiType}
                changeWeight={changeWeight}
              />
            </div>
            <div className="col-12 col-md-6  ">
              <Bmilist range={bmiRange} bmi={bmi} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

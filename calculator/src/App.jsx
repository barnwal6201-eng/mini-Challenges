import { useState } from "react";

const App = () => {
  const [value1, setValue1] = useState("");
  const [operators, setOperators] = useState("");
  const [value2, setValue2] = useState("");
  const [calculatedValue, setCalculatedValue] = useState(0);
  
  const buttons = [
    { value: "Clear" }, { value: "Del" },
    { value: "+-" },{ value: "x²" },
    { value: "1" },{ value: "2" },
    { value: "3" }, { value: "+" },
    { value: "4" }, { value: "5" },
    { value: "6" },{ value: "÷" }, 
     { value: "7" }, { value: "8" },
    { value: "9" }, { value: "-" },
    { value: "0" }, { value: "xʸ" },
    { value: "√" }, { value: "*" },
    { value: "." }, { value: "=" },
  ];

  const handleBtn = (key) => {
    // console.log(key)
    if (key === "Clear") {
      setOperators("");
      setValue1("");
      setValue2("");
      setCalculatedValue(0);
      return;
    }
    if (key === "Del") {
      if(operators && value2){
        setValue2((prev) =>
        prev.slice(0, -1));
      }else if(operators && !value2){
        setOperators("");
      }else{
        setValue1((prev) => prev.slice(0, -1));
      }
      return;
    }

    if (key === "+-") {
      if (value1.length) {
        setValue1((prev) =>
          prev[0] === "-" ? prev.substring(1) : "-" + prev
        );
      } else if (value2.length) {
        setValue2((prev) =>
          prev[0] === "-" ? prev.substring(1) : "-" + prev
        );
      }
      return;
    }

    if (key === "xʸ") {
      setOperators("^");
      
      return;
    }

     if (key === "x²") {
      setValue1(prev => String(Math.pow(parseFloat(prev) || 0, 2)));
      setCalculatedValue("");
      return;
    }

     if (key === "√") {
      setValue1(prev => String(Math.sqrt(parseFloat(prev))));
      return;
    }

    if(key === "+") setOperators("+");
    if(key === "-") setOperators("-");
    if(key === "*") setOperators("*");
    if(key === "÷") setOperators("/");
    console.log(operators)

   if(!operators){

    if(key === "1") setValue1(prev => prev + "1");
    if(key === "2") setValue1(prev => prev + "2");
    if(key === "3") setValue1(prev => prev + "3");
    if(key === "4") setValue1(prev => prev + "4");
    if(key === "5") setValue1(prev => prev + "5");
    if(key === "6") setValue1(prev => prev + "6");
    if(key === "7") setValue1(prev => prev + "7");
    if(key === "8") setValue1(prev => prev + "8");
    if(key === "9") setValue1(prev => prev + "9");
    if(key === "0") setValue1(prev => prev + "0");
    if (key === ".") setValue1(prev => prev + ".");

   }else{

    if(key === "1") setValue2(prev => prev + "1");
    if(key === "2") setValue2(prev => prev + "2");
    if(key === "3") setValue2(prev => prev + "3");
    if(key === "4") setValue2(prev => prev + "4");
    if(key === "5") setValue2(prev => prev + "5");
    if(key === "6") setValue2(prev => prev + "6");
    if(key === "7") setValue2(prev => prev + "7");
    if(key === "8") setValue2(prev => prev + "8");
    if(key === "9") setValue2(prev => prev + "9");
    if(key === "0") setValue2(prev => prev + "0");
    if (key === ".") setValue2(prev => prev + ".");
    console.log(value2)

    if(key === "="){
      
      if(operators === "+") setCalculatedValue(parseFloat(value1) + parseFloat(value2));
      if(operators === "-") setCalculatedValue(parseFloat(value1) - parseFloat(value2));
      if(operators === "*") setCalculatedValue(parseFloat(value1) * parseFloat(value2));
      if(operators === "/") setCalculatedValue(parseFloat(value1) / parseFloat(value2));

    }
   }


  };

  return (
    <div className="w-full container">
      <div className="relative">
        <div className="w-96 h-140 my-10 mx-auto text-end  bg-[rgb(142,238,245)] rounded-2xl px-5 py-12">
          {/* output display */}
          <div className="bg-black text-white  px-4 py-3 rounded-lg w-full h-16">
            {/* input */}
            <div>
              {value1} {operators} {value2}
            </div>
            {/* output */}
            <p>{calculatedValue}</p>
          </div>
          {/* buttons */}
          <div className="grid grid-cols-4 gap-2 pt-6">
            {buttons.map((value) => {
              return (
                <button
                  onClick={() => handleBtn(value.value)}
                  className="bg-gray-400 px-4 py-4 hover:bg-gray-200 cursor-pointer rounded-2xl font-bold"
                  key={value.value}
                  value={value.value}
                >
                  {value.value}
                </button>
              );
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

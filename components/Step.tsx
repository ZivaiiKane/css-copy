import { Fragment } from "react";

function Step(props: any) {
  let { heading, info, image } = props;
  return (
    <div className="flex mb-10">
      <img
        src={`../assets/${image}.png`}
        alt=""
        className=" w-[5.5rem] h-[5.5rem] mt-[25px] mr-[25px]"
      />

      <div className="w-[70%]">
        <h1 className="text-3xl font-bold text-[#424444] mt-16">{heading}</h1>
        <p className="text-[#808080] mt-3 text-lg">{info}</p>
      </div>
    </div>
  );
}

export default Step;

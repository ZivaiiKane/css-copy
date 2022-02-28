import Step from "./Step";
import { v4 as uuidv4 } from "uuid";

function Header() {
  let stepData: {
    heading: string;
    info: string;
    image: string;
  }[] = [
    {
      heading: "Project Discussion",
      info: "s a long established fact that a reader will be distracted by the readable content.",
      image: "one",
    },
    {
      heading: "Case Study",
      info: "s a long established fact that a reader will be distracted by the readable content.",
      image: "two",
    },
    {
      heading: "Execute Project",
      info: "s a long established fact that a reader will be distracted by the readable content.",
      image: "three",
    },
  ];

  return (
    <div className="content w-full bg-[#f3f3f3] pb-40">
      <div className="w-full h-full pt-20 ">
        <div className="h-full">
          <h1 className="text-5xl font-bold text-[#424444] leading-tight">
            Simplify your company systems with our IT Solutions
          </h1>
          <img
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="Hand holding lightbulb"
            className="h-[25rem] w-[25rem] rounded-2xl mt-20 object-cover"
          />
        </div>
      </div>
      <div className="h-full flex flex-col pt-40">
        {stepData.map((data) => (
          <Step
            heading={data.heading}
            info={data.info}
            image={data.image}
            key={uuidv4()}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;

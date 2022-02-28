import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

function Body() {
  let cardData: {
    heading: string;
    colour: string;
    icon: string;
    info: string;
  }[] = [
    {
      heading: "Software Development",
      colour: "bg-[#ffb0f7]",
      icon: "fa-solid fa-magnifying-glass",
      info: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      heading: "System Application",
      colour: "bg-[#ffcea1]",
      icon: "fa-solid fa-microchip",
      info: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      heading: "Network Solutions",
      colour: "bg-[#a0e8ff]",
      icon: "fa-solid fa-cloud",
      info: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      heading: "AI Systems",
      colour: "bg-[#cab0ff]",
      icon: "fa-solid fa-brain",
      info: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      heading: "Web & App Development",
      colour: "bg-[#ffa1a1]",
      icon: "fa-solid fa-window-restore",
      info: "It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      heading: "IT Consultation",
      colour: "bg-[#7bec7f]",
      icon: "fa-regular fa-comments",
      info: "It is a long established fact that a reader will be distracted by the readable content.",
    },
  ];

  return (
    <div className="w-full h-screen bg-[#fbfbfa] py-36">
      <div className="w-full text-center">
        <h1 className="text-5xl font-bold text-[#424444]">
          Here are the services we provide
        </h1>
        <p className="mt-3 text-[#808080]">
          The point of using Lorem ipsum is that it has.
        </p>
      </div>

      <div className="cards pt-20">
        {cardData.map((data) => (
          <Card
            heading={data.heading}
            colour={data.colour}
            icon={data.icon}
            info={data.info}
            key={uuidv4()}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;

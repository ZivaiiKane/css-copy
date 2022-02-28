function Card(props: any) {
  let { heading, info, colour, icon } = props;

  return (
    <div className="px-6 py-10 bg-white rounded-lg">
      <div className="w-full h-16">
        <div
          className={`w-16 h-16 rounded-full ${colour} text-white text-center`}
        >
          <i className={`my-auto ${icon} fa-xl mt-8`}></i>
        </div>
      </div>
      <h1 className="my-4 font-semibold text-[#464848]">{heading}</h1>
      <p>{info}</p>
    </div>
  );
}

export default Card;

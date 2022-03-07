export default function BottomCard(props: any) {
  let { heading, info, pill, image } = props;

  return (
    <div>
      <div className='w-full h-[28rem] bg-white rounded-xl'>
        <img
          src={image}
          alt=''
          className='w-full h-[45%] rounded-t-xl object-cover'
        />

        <div className=' absolute w-16 h-8 bg-white'></div>
        <div className='p-8'>
          <h1 className=' font-bold mb-3'>{heading}</h1>
          <p className=' font-normal text-[#808080]'>{info}</p>

          <p className=' mt-8 ml-[13rem] text-[#424444] text-sm font-medium'>
            Read more
          </p>
        </div>
      </div>
    </div>
  );
}

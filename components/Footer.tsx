export default function Footer() {
  return (
    <div className='w-full h-[34rem]'>
      <img
        src='https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
        alt=''
        className='w-full h-[34rem] object-cover absolute z-[1]'
      />
      <div className='overlay w-full h-[34rem]  flex flex-col justify-center relative z-[999] bg-[rgba(55,55,55,0.4)]'>
        <h1 className='text-5xl font-bold text-center mt-1 pt-30 text-white'>
          Get to know how we reaches you
        </h1>
        <h1 className='font-normal text-white text-center mt-5'>
          It is a long established fact that a reader will be distracted by{' '}
          <br /> the readable
        </h1>
        <button className='mx-auto mt-8 text-sm text-center text-white border-white border-solid border-[1.5px] py-2 px-5 rounded-full'>
          Learn Team
        </button>
      </div>
    </div>
  );
}

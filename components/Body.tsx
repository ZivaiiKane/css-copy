import Card from './Card';
import BottomCard from './BottomCard';
import { v4 as uuidv4 } from 'uuid';

function Body() {
  let cardData: {
    heading: string;
    colour: string;
    icon: string;
    info: string;
  }[] = [
    {
      heading: 'Software Development',
      colour: 'bg-[#ffb0f7]',
      icon: 'fa-solid fa-magnifying-glass',
      info: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    {
      heading: 'System Application',
      colour: 'bg-[#ffcea1]',
      icon: 'fa-solid fa-microchip',
      info: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    {
      heading: 'Network Solutions',
      colour: 'bg-[#a0e8ff]',
      icon: 'fa-solid fa-cloud',
      info: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    {
      heading: 'AI Systems',
      colour: 'bg-[#cab0ff]',
      icon: 'fa-solid fa-brain',
      info: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    {
      heading: 'Web & App Development',
      colour: 'bg-[#ffa1a1]',
      icon: 'fa-solid fa-window-restore',
      info: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    {
      heading: 'IT Consultation',
      colour: 'bg-[#7bec7f]',
      icon: 'fa-regular fa-comments',
      info: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
  ];

  let bottomData: {
    heading: string;
    pill: string;
    image: string;
    info: string;
  }[] = [
    {
      heading: 'Lorem ipsum dolor sit amst lur',
      pill: 'News',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      info: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...',
    },
    {
      heading: 'Lorem ipsum dolor sit amst lur',
      pill: 'Technology',
      image:
        'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      info: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...',
    },
    {
      heading: 'Lorem ipsum dolor sit amst lur',
      pill: 'Business',
      image:
        'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      info: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...',
    },
  ];

  return (
    <div className='w-full bg-[#fbfbfa] py-36'>
      <div className='w-full text-center'>
        <h1 className='text-5xl font-bold text-[#424444]'>
          Here are the services we provide
        </h1>
        <p className='mt-3 text-[#808080]'>
          The point of using Lorem ipsum is that it has.
        </p>
      </div>

      <div className='cards pt-20'>
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

      <div className='lower pt-[11.5rem]'>
        <div className='info mt-12'>
          <h1 className='text-5xl font-bold text-[#424444]'>
            Get handling now
          </h1>
          <p className='mt-5 text-[#808080]'>
            It is a long established fact that a reader will be distracted by{' '}
            <br />
            the readable content of a page when looking at its layout. The{' '}
            <br /> point of using Lorem ipsum is that it has a more-or-less
            <br /> normal distribution.
          </p>

          <button className='py-[0.55rem] px-5 bg-[#0085ff] rounded-lg text-white cursor-pointer mt-10'>
            <a href=''>Let's Contact</a>
          </button>
        </div>

        <div>
          <img
            src='https://images.unsplash.com/photo-1607292803026-3b9d9b3d0fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
            alt=''
            className='w-full rounded-3xl'
          />
        </div>
      </div>

      <div className='bottom w-full'>
        <h1 className=' uppercase text-md font-medium text-[#0085ff] text-center mt-40'>
          From the blog
        </h1>
        <h1 className='text-5xl font-bold text-center mt-1 text-[#424444]'>
          Recent news from the blog
        </h1>
        <h1 className='text-md font-medium text-[#808080] text-center mt-2'>
          The point of using Lorem ipsum is that it has.
        </h1>
      </div>

      <div className='cards mt-20'>
        {bottomData.map((data) => (
          <BottomCard
            heading={data.heading}
            pill={data.pill}
            image={data.image}
            info={data.info}
            key={uuidv4()}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;

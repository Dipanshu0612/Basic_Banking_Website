import Carousel from 'react-bootstrap/Carousel';

export default function HomeCaraousel() {
  return (
    <Carousel fade interval={4000}>
      <Carousel.Item className='bg-black'>
        <img
          className="h-[30rem] w-100 opacity-40"
          src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFua3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-5xl'>Welcome to the Bank of Sparks</h3>
          <p className='text-2xl my-2'>Secure your today and build a better tomorrow with the trusted and reliable services of The Bank of Sparks.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-black'>
        <img
          className="h-[30rem] w-100 opacity-70"
          src="https://c4.wallpaperflare.com/wallpaper/357/951/753/account-bank-account-banking-business-wallpaper-preview.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-5xl'>Trusted and Secure</h3>
          <p className='text-2xl my-2'>With The Bank of Sparks, your money is in safe hands - Bank with confidence.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-black'>
        <img
          className="h-[30rem] w-100 opacity-80"
          src="../assests/homeimage.avif"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-5xl'>Experienced, Efficient, Dynamic</h3>
          <p className='text-2xl my-2'>
          Unlocking the potential of your finances - Trust The Bank of Sparks for expert advice and guidance.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
 
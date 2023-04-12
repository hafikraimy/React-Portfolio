const Portfolio = () => {
  return (
    <section className='py-10 px-10 lg:px-40 md:px-20'>
      <div className='text-center'>
        <h3 className='text-2xl md:text-3xl font-medium py-1 dark:text-white'>Projects I've Built</h3>
      </div>
      <div className='flex flex-col gap-10 py-10 md:flex-row md:flex-wrap'>
        <div className='basis-1/3 flex-1 overflow-hidden shadow-lg rounded-lg'>
          <a href='https://dao-cryptodevs-murex.vercel.app' target='_blank'>
            <img
              className='rounded-lg min-h-full object-cover hover:scale-105 transition duration-300'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src='/dao.png'
            />
          </a>
        </div>
        <div className='basis-1/3 flex-1 shadow-lg overflow-hidden rounded-lg'>
          <a href='https://defi-exchange-dun.vercel.app' target='_blank'>
            <img
              className='rounded-lg min-h-full object-cover hover:scale-105 transition duration-300'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src='/defi-exchange.png'
            />
          </a>
        </div>
        <div className='basis-1/3 flex-1 shadow-lg overflow-hidden rounded-lg'>
          <a
            href='https://lottery-game-chainlink-vrf-topaz.vercel.app'
            target='_blank'
          >
            <img
              className='rounded-lg min-h-full object-cover hover:scale-105 transition duration-300'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src='/lottery-game.png'
            />
          </a>
        </div>
        <div className='basis-1/3 flex-1 shadow-lg overflow-hidden rounded-lg'>
          <a href='https://nft-collection-henna-seven.vercel.app' target='_blank'>
            <img
              className='rounded-lg min-h-full object-cover hover:scale-105 transition duration-300'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src='/nft-collection.png'
            />
          </a>
        </div>
        <div className='basis-1/3 flex-1 shadow-lg overflow-hidden rounded-lg'>
          <a href='https://initial-coin-offering-ten.vercel.app' target='_blank'>
            <img
              className='rounded-lg min-h-full object-cover hover:scale-105 transition duration-300'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src='/ico-token.png'
            />
          </a>
        </div>
        <div className='basis-1/3 flex-1 shadow-lg overflow-hidden rounded-lg'>
          <a href='https://initial-coin-offering-ten.vercel.app' target='_blank'>
            <img
              className='rounded-lg min-h-full object-cover hover:scale-105 transition duration-300'
              width={'100%'}
              height={'100%'}
              layout='responsive'
              src='/ico-token.png'
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;

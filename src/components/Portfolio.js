const Portfolio = () => {
  return (
    <section className='py-10 px-10 lg:px-40 md:px-20'>
      <div className='text-center'>
        <h3 className='text-2xl md:text-3xl font-medium py-1 dark:text-white'>
          Projects I've Built
        </h3>
      </div>
      <div className='flex flex-col gap-10 py-10 md:flex-row md:flex-wrap'>
        {/* 1st project */}
        <div class='basis-1/3 flex-1 rounded overflow-hidden shadow-lg dark:bg-white '>
          <a
            href='https://react-portfolio-amber-phi.vercel.app/'
            target='_blank'
          >
            <img
              className='w-full hover:scale-105 transition duration-300'
              src='/portfolio.png'
              alt='Portfolio'
            />
          </a>
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2'>Portfolio Project</div>
            <p class='text-gray-700 text-base'>
              A Portfolio projects build with Nextjs and tailwind css. It showcase some of my best collections of projects done in the past. 
            </p>
          </div>
          <div class='px-6 pt-4 pb-2'>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #nextjs
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #tailwindcss
            </span>
            
          </div>
        </div>
        {/* 2nd project */}
        <div class='basis-1/3 flex-1 rounded overflow-hidden shadow-lg dark:bg-white '>
          <a href='https://mern-job-dashboard.onrender.com' target='_blank'>
            <img
              className='w-full hover:scale-105 transition duration-300'
              src='/mern-job-dashboard.png'
              alt='MERN Job Dashboard'
            />
          </a>
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2'>MERN Job Dashboard</div>
            <p class='text-gray-700 text-base'>
              A full-stack Job Dashboard apps built with MERN stack and cookies auth. User can register and login, edit profile, add 
              jobs, edit jobs, delete jobs and view jobs stats. 
            </p>
          </div>
          <div class='px-6 pt-4 pb-2'>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #reactjs
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #nodejs
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #express
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #cookies
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #styledcomponent
            </span>
          </div>
        </div>
        {/* 3rd project */}
        <div class='basis-1/3 flex-1 rounded overflow-hidden shadow-lg dark:bg-white '>
          <a
            href='https://lottery-game-chainlink-vrf-topaz.vercel.app'
            target='_blank'
          >
            <img
              className='w-full hover:scale-105 transition duration-300'
              src='/lottery-game.png'
              alt='Lottery Game On-Chain'
            />
          </a>
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2'>Lottery Game On-Chain</div>
            <p class='text-gray-700 text-base'>
              A Lottery Game where a random winner will be
              chosen when max players have joined. Winner will get all the money.
            </p>
          </div>
          <div class='px-6 pt-4 pb-2'>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #nextjs
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #solidity
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #hardhat
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #Chainlink VRF
            </span>
          </div>
        </div>
        {/* 4th project */}
        <div class='basis-1/3 flex-1 rounded overflow-hidden shadow-lg dark:bg-white '>
          <a href='https://defi-exchange-dun.vercel.app' target='_blank'>
            <img
              className='w-full hover:scale-105 transition duration-300'
              src='/defi-exchange.png'
              alt='Defi Exchange'
            />
          </a>
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2'>Defi Exchange</div>
            <p class='text-gray-700 text-base'>
              A Defi Exchange with only one asset pair (Eth / Crypto Dev). Fee
              of 1% on swaps. Crypto Dev LP tokens are given proportionally to
              Eth provided.
            </p>
          </div>
          <div class='px-6 pt-4 pb-2'>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #nextjs
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #solidity
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #hardhat
            </span>
          </div>
        </div>
        {/* 5th project */}
        <div class='basis-1/3 flex-1 rounded overflow-hidden shadow-lg dark:bg-white '>
          <a href='https://dao-cryptodevs-murex.vercel.app' target='_blank'>
            <img
              className='w-full hover:scale-105 transition duration-300'
              src='/dao.png'
              alt='Crypto Dev DAO'
            />
          </a>
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2'>Crypto Dev DAO</div>
            <p class='text-gray-700 text-base'>
              A DAO for CryptoDevs NFTs holder. Allow NFT holders to create and
              vote on proposals.
            </p>
          </div>
          <div class='px-6 pt-4 pb-2'>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #nextjs
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #solidity
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #hardhat
            </span>
          </div>
        </div>
        {/* 6th project */}
        <div class='basis-1/3 flex-1 rounded overflow-hidden shadow-lg dark:bg-white '>
          <a
            href='https://initial-coin-offering-ten.vercel.app'
            target='_blank'
          >
            <img
              className='w-full hover:scale-105 transition duration-300'
              src='/ico-token.png'
              alt='ICO Token'
            />
          </a>
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2'>ICO Token</div>
            <p class='text-gray-700 text-base'>
              Initial Coin Offering tokens. Every Crypto Dev NFT holder get 10
              tokens for free. The tokens also open for public to buy for 0.001
              ether.
            </p>
          </div>
          <div class='px-6 pt-4 pb-2'>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #nextjs
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #solidity
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #hardhat
            </span>
          </div>
        </div>
        {/* 7th project */}
        <div class='basis-1/3 flex-1 rounded overflow-hidden shadow-lg dark:bg-white '>
          <a
            href='https://nft-collection-henna-seven.vercel.app'
            target='_blank'
          >
            <img
              className='w-full hover:scale-105 transition duration-300'
              src='/nft-collection.png'
              alt='NFT Collection'
            />
          </a>
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2'>NFT Minting Page</div>
            <p class='text-gray-700 text-base'>
              An NFT Minting Page. Allow user to mint Crypto Devs NFT collections.  
            </p>
          </div>
          <div class='px-6 pt-4 pb-2'>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #nextjs
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #solidity
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #hardhat
            </span>
          </div>
        </div>
        {/* 8th project */}
        <div class='basis-1/3 flex-1 rounded overflow-hidden shadow-lg dark:bg-white '>
          <a
            href='https://whitelist-dapp-delta-seven.vercel.app/'
            target='_blank'
          >
            <img
              className='w-full hover:scale-105 transition duration-300'
              src='/nft-collection.png'
              alt='NFT Whitelist'
            />
          </a>
          <div class='px-6 py-4'>
            <div class='font-bold text-xl mb-2'>NFT Whitelist</div>
            <p class='text-gray-700 text-base'>
              A Whitelist Dapp for NFT Collection Crypto Dev. Whitelist access
              are given to first 10 users for free.
            </p>
          </div>
          <div class='px-6 pt-4 pb-2'>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #nextjs
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #solidity
            </span>
            <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #hardhat
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;

import React from 'react'

const NFTSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 lg:flex-row md:items-center md:justify-between  p-14 md:p-20 bg-[#A02279]">
      <section className="text-left">
        <h1 className="text-5xl font-bold text-white mb-10">Metabnb NFTs</h1>
        <p className="w-96 text-white leading-8 text-lg">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs.These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="text-[#A02279] bg-white mt-10 px-10 py-3 rounded font-medium">
          Learn more
        </button>
      </section>
      <section>
        <img src="Frame-of-3.png" />
      </section>
    </div>
  );
}

export default NFTSearch